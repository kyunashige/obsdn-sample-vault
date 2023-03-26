const format2config = {
    "YYYY": {
        type: "Yearly",
        format: "YYYY",
        folderFormat: "[Diary]/YYYY",
        shortFormat: "[Y]YYYY",
    },
    "YYYY-[Q]Q": {
        type: "Quarterly",
        format: "YYYY-[Q]Q",
        folderFormat: "[Diary]/YYYY",
        shortFormat: "[Q]Q",
    },
    "YYYY-MM": {
        type: "Monthly",
        format: "YYYY-MM",
        folderFormat: "[Diary]/YYYY/MM",
        shortFormat: "[M]MM",
    },
    "YYYY-MM-DD_ddd": {
        type: "Daily",
        format: "YYYY-MM-DD_ddd",
        folderFormat: "[Diary]/YYYY/MM",
        shortFormat: "",
    },
    "GGGG-[W]WW": {
        type: "Weekly",
        format: "GGGG-[W]WW",
        folderFormat: "[Diary]/GGGG/[W]",
        shortFormat: "[W]WW",
    },
};

const moveFile = async (tp, folder, fileName) => {
    if (!this.app.vault.getAbstractFileByPath(folder)) {
        await this.app.vault.createFolder(folder);
    }
    if (tp.file.folder(true) == folder) {
        throw "This file is already in the folder";
    }
    fileName = fileName || tp.config.target_file.basename;
    const path = folder + "/" + fileName;
    console.log(`${tp.file.path(true)} -> \n${path}.md`);
    await tp.file.move(path);
};

const organizeTray = async (tp) => {
    const fileTitle = tp.config.target_file.basename;
    if (fileTitle.match(/\d{4}-\d{2}-\d{2}T\d{4}/g)) {
        throw "This is a Zettelkasten file";
    }
    const date = moment(tp.file.creation_date(), "YYYY-MM-DD HH:mm");
    const folder = date.format("[Tray]/YYYY/MM");
    await moveFile(tp, folder);
};

const organizeDiary = async (tp) => {
    const date = moment(tp.file.title, Object.keys(format2config), true);
    if (!date.isValid()) {
        throw "Invalid diary title";
    }
    const format = date.creationData().format;
    const { folderFormat } = format2config[format];
    const folder = date.format(folderFormat);
    await moveFile(tp, folder);
};

const organizer = {
    Tray: organizeTray,
    Diary: organizeDiary,
};

const moveFileInSpecificFolder = (tp, dirName, successAndClose) => {
    console.log(`Moving a file in ${dirName}`);
    organizer[dirName](tp)
        .then(() => {
            new Notice('Moved');
            if (successAndClose) this.app.workspace.activeLeaf.detach();
        })
        .catch((message) => {
            new Notice("Stayed:\n" + message);
            console.log("Cancelled: " + message);
        });
};

const parseDailyTitle = (tp) => {
    const config = tp.user.organizer(tp).getConfig();
    const today = moment();
    if ((date = moment(tp.file.title, Object.keys(config), true)).isValid()) {
        new Notice(today.locale('ja').to(date));
        const format = date.creationData().format;
        const type = config[format].type;
        return {
            type: type,
            date: date,
        };
    } else {
        new Notice("for test");
        return {
            type: "Daily",
            date: today,
        };
    }
};

const inquireFileName = async (tp, default_value) => {
    if (!tp.file.title.startsWith("Untitled")) {
        return tp.file.title;
    }
    const prompt_text = "Enter new title";
    const fileName = await tp.system.prompt(prompt_text, default_value, true);
    if (fileName === default_value) {
        throw "Create temporary file";
    }
    return fileName;
};

const createFileInTray = async (tp) => {
    console.log(`Creating a file in Tray`);
    const today = moment();
    const defaultFileName = today.format("YYYY-MM-DD[T]HHmm");
    return inquireFileName(tp, defaultFileName)
        .then(async (fileName) => {
            const folder = today.format("[Tray]/YYYY/MM");
            await moveFile(tp, folder, fileName.replaceAll(": ", "："));
            return fileName;
        }, async (message) => {
            new Notice(message);
            if (message === "Create temporary file") {
                await tp.file.rename(defaultFileName);
            }
            return defaultFileName;
        });
};

const createTags = (tp) => {
    if (tp.file.path(true).startsWith("Cabinets/Contents")) {
        const dipendency = tp.file.path(true).split("/");
        let dirName = "";
        if (dipendency[3].endsWith(".md")) {
            dirName = dipendency[2];
        } else {
            dirName = dipendency.slice(2, 4).join("/");
        }
        return `作品/${dirName}`;
    } else {
        return "";
    }
};

const createFileInContents = async (tp) => {
    console.log(`Creating a file in Cabinets/Contents`);
    const basename = tp.file.path(true).split("/").slice(2, -1).join("/");
    const prompt_text = `Enter new title @ ${basename}`;
    const fileName = await tp.system.prompt(prompt_text, "", true);
    await tp.file.rename(fileName);
    return fileName;
};

const createFileInNonTray = async (tp) => {
    console.log(`Creating a file in Non-Tray`);
    const basename = tp.file.path(true).split("/").slice(0, -1).join("/");
    const prompt_text = `Enter new title @ ${basename}`;
    const today = moment();
    const default_value = today.format("YYYY-MM-DD ");
    const fileName = await tp.system.prompt(prompt_text, default_value, true);
    await tp.file.rename(fileName);
    return fileName;
};

module.exports = (tp) => {
    return {
        create: async () => {
            switch (true) {
                case tp.file.path(true).startsWith("Diary"):
                    throw "Diary files are under the control of DailyNote.md";
                case tp.file.path(true).startsWith("Tray"):
                    return await createFileInTray(tp);
                case tp.file.path(true).startsWith("Cabinets/Contents"):
                    return await createFileInContents(tp);
                default:
                    return await createFileInNonTray(tp);
            }
        },
        move: (successAndClose) => {
            if (match = tp.file.path(true).match(/^(Tray|Diary)\//)) {
                const dirName = match[1];
                moveFileInSpecificFolder(tp, dirName, successAndClose);
            } else {
                new Notice("In unorganized folder");
            }
        },
        getConfig: (hasTypeAsKey = false) => {
            const config = JSON.parse(JSON.stringify(format2config));
            if (hasTypeAsKey) {
                Object.values(format2config).forEach((value) => {
                    config[value.type] = value;
                });
            }
            return config;
        },
        getTags: () => createTags(tp),
        parseDailyTitle: () => parseDailyTitle(tp),
    };
};
