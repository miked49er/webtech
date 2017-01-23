/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.1830",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'photo_1',
                type: 'image',
                rect: ['0%', '0','100%','106.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo_1.jpg",'0px','0px']
            },
            {
                id: 'photo_2',
                display: 'none',
                type: 'image',
                rect: ['0%', '0','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo_2.jpg",'0px','0px']
            },
            {
                id: 'photo_3',
                display: 'none',
                type: 'image',
                rect: ['100%', '0','100%','114.8%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo_3.jpg",'0px','0px']
            },
            {
                id: 'photo_4',
                display: 'none',
                type: 'image',
                rect: ['100%', '0','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo_4.jpg",'0px','0px']
            },
            {
                id: 'photo_5',
                display: 'none',
                type: 'image',
                rect: ['100%', '0','100%','100%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"photo_5.jpg",'0px','0px']
            },
            {
                id: 'btnNext',
                display: 'block',
                type: 'image',
                rect: ['94.8%', '39%','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["57px 57px", "57px 57px", "57px 57px", "57px 57px"],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                boxShadow: ["", 3, 3, 10, 0, "rgba(0,0,0,1.00)"]
            },
            {
                id: 'btnBack',
                display: 'none',
                type: 'image',
                rect: ['1.3%', '39%','35px','35px','auto', 'auto'],
                cursor: ['pointer'],
                borderRadius: ["57px 57px", "57px 57px", "57px 57px", "57px 57px"],
                fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                boxShadow: ["", -3, -3, 10, 0, "rgba(0,0,0,1.00)"],
                transform: [[],['180']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_btnBack}": [
                ["style", "border-top-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '10px'],
                ["style", "border-bottom-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.5'],
                ["style", "left", '5.78%'],
                ["style", "cursor", 'pointer'],
                ["style", "top", '39%'],
                ["style", "border-bottom-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,1.00)'],
                ["transform", "rotateZ", '180deg'],
                ["style", "display", 'none'],
                ["subproperty", "boxShadow.offsetV", '-3px'],
                ["subproperty", "boxShadow.offsetH", '-3px'],
                ["style", "border-top-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_photo_4}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '100%']
            ],
            "${_btnNext}": [
                ["style", "border-top-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["subproperty", "boxShadow.blur", '10px'],
                ["style", "border-bottom-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0.5'],
                ["style", "left", '90.33%'],
                ["style", "top", '39%'],
                ["style", "border-bottom-left-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer'],
                ["subproperty", "boxShadow.color", 'rgba(0,0,0,1.00)'],
                ["style", "display", 'block'],
                ["subproperty", "boxShadow.offsetV", '3px'],
                ["subproperty", "boxShadow.offsetH", '3px'],
                ["style", "border-top-right-radius", [57,57], {valueTemplate:'@@0@@px @@1@@px'} ]
            ],
            "${_photo_1}": [
                ["style", "left", '0%'],
                ["style", "opacity", '1']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${_photo_5}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '100%']
            ],
            "${_photo_3}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '100%']
            ],
            "${_photo_2}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0'],
                ["style", "left", '100%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 5000,
            autoPlay: false,
            timeline: [
                { id: "eid1", tween: [ "style", "${_photo_2}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid21", tween: [ "style", "${_photo_4}", "left", '0%', { fromValue: '100%'}], position: 2000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid22", tween: [ "style", "${_photo_4}", "left", '-100%', { fromValue: '0%'}], position: 3000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid23", tween: [ "style", "${_photo_5}", "left", '0%', { fromValue: '100%'}], position: 3000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid24", tween: [ "style", "${_photo_5}", "left", '-100%', { fromValue: '0%'}], position: 4000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid17", tween: [ "style", "${_photo_5}", "opacity", '1', { fromValue: '0'}], position: 3000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid18", tween: [ "style", "${_photo_5}", "opacity", '0', { fromValue: '1'}], position: 4000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid11", tween: [ "style", "${_photo_4}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_photo_1}", "left", '-100%', { fromValue: '0%'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid31", tween: [ "style", "${_btnBack}", "left", '5.78%', { fromValue: '5.78%'}], position: 1803, duration: 0, easing: "easeInOutQuad" },
                { id: "eid30", tween: [ "style", "${_btnNext}", "left", '90.33%', { fromValue: '90.33%'}], position: 1803, duration: 0, easing: "easeInOutQuad" },
                { id: "eid25", tween: [ "style", "${_btnBack}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInOutQuad" },
                { id: "eid12", tween: [ "style", "${_photo_5}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_btnBack}", "opacity", '0.5', { fromValue: '0.5'}], position: 1803, duration: 0, easing: "easeInOutQuad" },
                { id: "eid34", tween: [ "style", "${_btnNext}", "opacity", '0.5', { fromValue: '0.5'}], position: 1803, duration: 0, easing: "easeInOutQuad" },
                { id: "eid7", tween: [ "style", "${_photo_2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid9", tween: [ "style", "${_photo_2}", "opacity", '0', { fromValue: '1'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid2", tween: [ "style", "${_photo_1}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid13", tween: [ "style", "${_photo_3}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid14", tween: [ "style", "${_photo_3}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid10", tween: [ "style", "${_photo_3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid5", tween: [ "style", "${_photo_2}", "left", '0%', { fromValue: '100%'}], position: 0, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid8", tween: [ "style", "${_photo_2}", "left", '-100%', { fromValue: '0%'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid19", tween: [ "style", "${_photo_3}", "left", '0%', { fromValue: '100%'}], position: 1000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid20", tween: [ "style", "${_photo_3}", "left", '-100%', { fromValue: '0%'}], position: 2000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid15", tween: [ "style", "${_photo_4}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid16", tween: [ "style", "${_photo_4}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid26", tween: [ "style", "${_btnNext}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0, easing: "easeInOutQuad" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1396734290");
