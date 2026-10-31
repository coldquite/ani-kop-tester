// Tematické sady podle harmonogramu ANI-KOP 2026.
// Číslování v indexech je 1-based a odkazuje na původní nezměněné zdroje.
// Přiřazení je orientační; starší otázky nemusejí odpovídat aktuálnímu testu.
(function (global) {
    "use strict";

    var sources = {
        assessment: global.questions || [],
        exam: global.examQuestions || []
    };
    var lectureAssignments = {
    "1": {
        "assessment": [
            16,
            18,
            19,
            39,
            42,
            59,
            60,
            82,
            96
        ],
        "exam": []
    },
    "2": {
        "assessment": [
            1,
            2,
            3,
            4,
            5,
            13,
            14,
            15,
            28,
            31,
            33,
            43,
            62
        ],
        "exam": []
    },
    "3": {
        "assessment": [
            6,
            7,
            8,
            9,
            10,
            20,
            21,
            22,
            23,
            25,
            26,
            27,
            29,
            30,
            32,
            34,
            35,
            36,
            52,
            61,
            63,
            69,
            70,
            86,
            88,
            89,
            90,
            91,
            92,
            99
        ],
        "exam": []
    },
    "4": {
        "assessment": [
            11,
            12,
            37,
            38,
            40,
            41,
            44,
            45,
            46,
            49,
            53,
            55,
            58,
            64,
            65,
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            83,
            87
        ],
        "exam": [
            1,
            4,
            5,
            8,
            9,
            10,
            14,
            30,
            43,
            65,
            67,
            70,
            77,
            78,
            84,
            85
        ]
    },
    "5": {
        "assessment": [
            17,
            24,
            78,
            79,
            80
        ],
        "exam": []
    },
    "6": {
        "assessment": [
            51
        ],
        "exam": [
            79
        ]
    },
    "7": {
        "assessment": [
            50,
            56,
            84,
            85
        ],
        "exam": []
    },
    "8": {
        "assessment": [
            47,
            54,
            81
        ],
        "exam": [
            31,
            57,
            58,
            59,
            60,
            61,
            62,
            63,
            64,
            89
        ]
    },
    "9": {
        "assessment": [],
        "exam": [
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            74,
            86,
            92
        ]
    },
    "10": {
        "assessment": [],
        "exam": [
            2,
            3,
            6,
            7,
            11,
            12,
            13,
            15,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            66,
            68,
            69,
            71,
            72,
            73,
            75,
            76,
            80,
            81,
            82,
            83,
            87,
            88,
            90,
            91,
            93,
            94
        ]
    },
    "11": {
        "assessment": [],
        "exam": []
    },
    "12": {
        "assessment": [],
        "exam": []
    }
};
    var lectureNames = [
    "Úvod a kombinatorické problémy",
    "P, NP, co-NP a polynomiální hierarchie",
    "NP-úplnost a NP-těžkost",
    "Stavový prostor, lokální heuristiky, B&B",
    "SAT a SMT",
    "ILP a CSP",
    "Randomizované algoritmy",
    "Experimenty a parametrizované heuristiky",
    "Simulované ochlazování",
    "Simulovaná evoluce I",
    "Vícekriteriální a evoluční metody",
    "Globální metody"
];
    var selected = {};
    var lectures = {};
    var archive = [];

    function record(source, position, lecture) {
        var questions = sources[source];
        var index = position - 1;
        var key = source + ":" + position;

        if (index < 0 || index >= questions.length) {
            throw new Error("Neplatný index otázky: " + key);
        }
        if (selected[key]) {
            throw new Error("Otázka je přiřazena vícekrát: " + key);
        }
        selected[key] = lecture;
        return questions[index];
    }

    Object.keys(lectureAssignments).forEach(function (id) {
        var group = lectureAssignments[id];
        lectures[id] = group.assessment.map(function (index) {
            return record("assessment", index, id);
        }).concat(group.exam.map(function (index) {
            return record("exam", index, id);
        }));
    });

    ["assessment", "exam"].forEach(function (source) {
        sources[source].forEach(function (question, i) {
            if (!selected[source + ":" + (i + 1)]) {
                archive.push(question);
            }
        });
    });

    var groups = {
        midterm: [1, 2, 3, 4, 5, 6],
        second: [7, 8, 9, 10, 11, 12],
        current: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    };
    var labels = {
        midterm: "Průběžný test · P1–P6",
        second: "Druhá část semestru · P7–P12",
        current: "Aktuální témata · P1–P12",
        archive: "Starší témata · archiv",
        all: "Všechny otázky · včetně archivu"
    };

    function canonicalId(id) {
        // Zpětná kompatibilita se starými odkazy ?set=assessment a ?set=exam.
        if (id === "assessment") return "midterm";
        if (id === "exam") return "second";
        if (id && Object.prototype.hasOwnProperty.call(lectures, id.replace(/^lecture-/, "")) &&
            /^lecture-\d+$/.test(id)) return id;
        return Object.prototype.hasOwnProperty.call(labels, id) ? id : "midterm";
    }

    function getQuestions(setId) {
        var id = canonicalId(setId);
        if (id.indexOf("lecture-") === 0) {
            return (lectures[id.substring(8)] || []).slice();
        }
        if (id === "archive") return archive.slice();
        if (id === "all") return sources.assessment.concat(sources.exam);
        return groups[id].reduce(function (result, lecture) {
            return result.concat(lectures[lecture] || []);
        }, []);
    }

    function prepareSelector(selector, requestedId) {
        var id = canonicalId(requestedId);
        Array.prototype.forEach.call(selector.options, function (option) {
            var setId = option.value;
            var count = getQuestions(setId).length;
            var lectureMatch = /^lecture-(\d+)$/.exec(setId);
            var title = lectureMatch
                ? "P" + lectureMatch[1] + " · " + lectureNames[Number(lectureMatch[1]) - 1]
                : labels[setId];
            if (title) option.textContent = title + " (" + count + ")";
            option.disabled = count === 0;
        });
        selector.value = id;
        return id;
    }

    global.kopQuestionSets = {
        canonicalId: canonicalId,
        getQuestions: getQuestions,
        prepareSelector: prepareSelector,
        lectureNames: lectureNames,
        // Pro kontrolu úplnosti tematického rozřazení.
        totalQuestions: sources.assessment.length + sources.exam.length,
        archivedQuestions: archive.length
    };
})(window);
