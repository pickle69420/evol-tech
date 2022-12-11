const screen = document.getElementById('terminalscreen');
var settings = { 
    "title"  :  "EVOL", 
    "version"   :  "1.0.0 BETA"
};

startup(settings);

var line1 = newLine('line1',[
    {
        "id": "section1",
        "section": [
            {
                "id": "text1",
                "text": [
                    {
                        "text": "hello ",
                        "decorations": "bold",
                        "color": "pink"
                    },
                    {
                        "text": "world",
                        "decorations": "italic",
                        "color": "blue"
                    }
                ]
            }
        ]
    }
]);
var section2 = newSection('section2',[
    {
        "id": "text2",
        "text": [
            {
                "text": "test ",
                "decorations": "underline",
                "color": "darkpurple"
            },
            {
                "text": "thing, ",
                "decorations": "italic",
                "color": "aqua"
            },
            {
                "text": "cool ",
                "decorations": "italic",
                "color": "brown"
            }
        ]
    }
],line1.id)
var text3 = newText('text3',[
    {
        "text": "thing ",
        "decorations": "underline",
        "color": "darkpurple"
    },
    {
        "text": "thing ",
        "decorations": "italic",
        "color": "aqua"
    },
    {
        "text": "one more ",
        "decorations": "italic",
        "color": "red"
    }
],section2.id)