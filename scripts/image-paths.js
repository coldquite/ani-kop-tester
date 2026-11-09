// Git LFS assets are pointer files in GitHub Pages; serve actual images via GitHub media.
// Preserve original GitHub links as a fallback when media is unavailable.
(function (global) {
    "use strict";
    var prefix = "assets/exam/";
    var mediaBase = "https://media.githubusercontent.com/media/coldquite/ani-kop-tester/master/";
    var githubBase = "https://github.com/coldquite/ani-kop-tester/blob/master/";

    function fix(question) {
        ["image", "answerImage"].forEach(function (field) {
            var path = question[field];
            if (typeof path !== "string" || path.indexOf(prefix) !== 0) return;
            if (!/^[a-z0-9_./-]+\.png$/i.test(path) || path.indexOf("..") !== -1) return;
            question[field + "Github"] = githubBase + path;
            question[field] = mediaBase + path;
        });
        return question;
    }

    (global.questions || []).forEach(fix);
    (global.examQuestions || []).forEach(fix);
    Object.keys(global.aiGeneratedQuestionSets || {}).forEach(function (id) {
        (global.aiGeneratedQuestionSets[id] || []).forEach(fix);
    });
    global.kopImagePaths = { fix: fix };
})(window);
