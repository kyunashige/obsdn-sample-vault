<%*
const periodicityType = tp.user.organizer(tp).parseDailyTitle().type;
// The variable date is not handled properly. I solved this problem
// by creating the diary templates using JS scripts instead of markdown.
tR += await tp.file.include(`[[${periodicityType}Note]]`);
%>