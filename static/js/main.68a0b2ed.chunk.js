(this.webpackJsonpfacture=this.webpackJsonpfacture||[]).push([[0],{21:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return Menu})),__webpack_require__.d(__webpack_exports__,"a",(function(){return JsonEditor}));var D_Desktop_Projects_nodejs_facture_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(13),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),react_router_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),color_rgba__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30),color_rgba__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(color_rgba__WEBPACK_IMPORTED_MODULE_3__),react_ace__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(31),react_ace__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_ace__WEBPACK_IMPORTED_MODULE_4__),ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(51),ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(ace_builds_src_noconflict_mode_json__WEBPACK_IMPORTED_MODULE_5__),ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(52),ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(ace_builds_src_noconflict_theme_github__WEBPACK_IMPORTED_MODULE_6__),_style__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(9),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),Menu=function(_){var e=_.setCurrentRef,n=new URLSearchParams(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.d)().search).get("r");react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){n&&e(n)}));for(var t=[],r=null,a=0;a<localStorage.length;++a){var c=localStorage.key(a);c.startsWith("facture-gen-")?t.push(c.substr(12)):"last-facture-gen"===c&&(r=JSON.parse(localStorage.getItem("last-facture-gen")).reference)}return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_7__.d,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_style__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:function(){return e("")},children:"New Invoice"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"invoices",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"title0",children:"Last"}),r?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{className:"invoice",onClick:function(){return e(r)},children:r}):null,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"title1",children:"Saved"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"list",children:t.map((function(_,n){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{className:"invoice",onClick:function(){return e(_)},children:_},n)}))})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("button",{className:"clear",onClick:function(){return localStorage.clear()},children:"CLEAR SAVED"})]})},JsonEditor=function(_){var e=_.reference,n=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(!1),t=Object(D_Desktop_Projects_nodejs_facture_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(n,2),r=t[0],a=t[1],c=react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),s=Object(D_Desktop_Projects_nodejs_facture_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(c,2),i=s[0],o=s[1];react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){var _=null;if(e&&""!==e){if(!(_=localStorage.getItem("facture-gen-"+e)))return}else _='{\n    "reference": "",\n    "date": "",\n            \n    "factureby": {    \n        "name": "",\n        "infos": []\n    },\n            \n    "factureto": {\n        "name": "",\n        "infos": []\n    },\n            \n    "entitled": "",\n    "totalFormula": "",\n    "invoices": [],\n    "message": "",\n    "infos": {}\n}';o(_)}),[]);return r?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(InvoiceView,{attrs:i}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_7__.c,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"textarea",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_ace__WEBPACK_IMPORTED_MODULE_4___default.a,{mode:"json",theme:"github",value:i,onChange:function(_){return o(_)},width:"100%",height:"100%"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_style__WEBPACK_IMPORTED_MODULE_7__.a,{onClick:function(){return function(){var _=JSON.parse(i);_&&_.reference&&""!==_.reference&&(localStorage.setItem("facture-gen-"+_.reference,i),localStorage.setItem("last-facture-gen",i),a(!0),o(_))}()},children:"Generate"})]})},InvoiceView=function InvoiceView(_ref3){var _attrs$totalMessage,attrs=_ref3.attrs,total=0;react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect((function(){attrs.name?document.title=attrs.name:document.title="invoice-".concat(attrs.reference),setTimeout((function(){return window.print()}),600)}),[]);var color2=attrs.color2;return attrs.color&&!attrs.color2&&(color2=color_rgba__WEBPACK_IMPORTED_MODULE_3___default()(attrs.color),color2="rgba(".concat(color2[0],", ").concat(color2[1],", ").concat(color2[2],", 0.1)")),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_style__WEBPACK_IMPORTED_MODULE_7__.b,{color:attrs.color||"var(--blue)",color2:color2||"var(--blue2)",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"header",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"top",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"title",children:"FACTURE"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p",{className:"ref",children:["N\xb0 ",attrs.reference]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"date",children:attrs.date})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"facturer",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"by",children:"Factur\xe9 par"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"name",children:attrs.factureby.name}),attrs.factureby.infos.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"info",children:_},e)}))]})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"body",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"factured",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"by",children:"Factur\xe9 \xe0"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"name",children:attrs.factureto.name}),attrs.factureto.infos.map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"info",children:_},e)}))]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"amounts",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"titled",children:attrs.entitled}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("table",{className:"table",children:attrs.invoices.map((function(tr,i){var f=[];return tr.forEach((function(v){if("object"==typeof v)f.push(eval(v.formula));else{var a=parseFloat(v);isNaN(a)&&(a=v),f.push(a)}})),0!==i&&void 0!==attrs.totalFormula&&eval(attrs.totalFormula),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("tr",{className:0===i?"titles":"field",children:tr.map((function(_,e){var n=_;return"object"==typeof _&&(n=f[e]+_.next),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td",{children:n},e)}))},i)}))}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"total",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"text",children:null!==(_attrs$totalMessage=attrs.totalMessage)&&void 0!==_attrs$totalMessage?_attrs$totalMessage:"Total Hors Taxe"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p",{className:"amount",children:[total.toFixed(2)," \u20ac"]})]}),attrs.disableTvaMention?"":Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"tvanon",children:"TVA non applicable \u2013 article 293 B du CGI"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{className:"message",children:attrs.message}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"bank",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"title",children:"Coordonn\xe9es"}),Object.keys(attrs.infos).map((function(_,e){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"group",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"title",children:_}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("p",{className:"value",children:attrs.infos[_]})]})}))]})]})})}},35:function(_,e,n){"use strict";n.r(e);var t=n(13),r=n(0),a=n.n(r),c=n(29),s=n.n(c),i=n(20),o=n(21),l=n(1),u=function(){var _=a.a.useState(null),e=Object(t.a)(_,2),n=e[0],r=e[1];return Object(l.jsx)(i.a,{children:null===n?Object(l.jsx)(o.b,{setCurrentRef:r}):Object(l.jsx)(o.a,{reference:n})})};s.a.render(Object(l.jsx)(u,{}),document.getElementById("root"))},9:function(_,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return d}));var t,r,a,c,s=n(14),i=n(15),o=i.a.div(t||(t=Object(s.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap');\n    font-family: Poppins;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n\n    p {\n        margin-block-start: 0px;\n        margin-block-end: 0px;\n    }\n\n    .invoices {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n\n        .no {\n            color: var(--grey2);\n        }\n\n        .list {\n                display: flex;\n                flex-direction: column;\n            }\n\n        .invoice {\n            cursor: pointer;\n            border: none;\n            background-color: transparent;\n            outline: none;\n            font-family: inherit;\n            font-size: 20px;\n        }\n    }\n\n    .clear {\n        font-family: inherit;\n        border: none;\n        outline: none;\n        padding: 20px;\n    }\n\n"]))),l=i.a.div(r||(r=Object(s.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap');\n    font-family: Poppins;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n\n    .textarea {\n        flex: 1;\n    }\n"]))),u=i.a.button(a||(a=Object(s.a)(["\n    background-color: var(--blue);\n    color: white;\n    font-family: Poppins;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding: 20px;\n"]))),d=i.a.div(c||(c=Object(s.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap');\n    -webkit-print-color-adjust: exact;\n    font-family: \"Poppins\";\n    height: 100%;\n\n    --default: ",";\n    --default2: ",";\n\n    p {\n        margin-block-start: 0px;\n        margin-block-end: 0px;\n    }\n\n    .container {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        margin-left: 30px;\n        margin-right: 30px;\n\n        .by {\n            color: var(--default);\n            background-color: var(--grey1);\n            border-radius: 10px;\n            padding-left: 10px;\n            padding-right: 10px;\n        }\n\n        .header {\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n\n            /* background-color: #638AE6; */\n            color: black;\n            font-weight: 300;\n            border-radius: 15px;\n            padding: 10px;\n            /* margin-bottom: 50px; */\n\n            .top {\n                font-size: 18px;\n                color: var(--grey2);\n                .title {\n                    color: black;\n                    font-size: 48px;\n                    letter-spacing: 11px;\n                    font-weight: 400;\n                }\n            }\n\n            .facturer {\n                display: flex;\n                flex-direction: column;\n                align-items: flex-end;\n                color: var(--grey2);\n\n                font-size: 12px;\n\n                .name {\n                    color: black;\n                    font-size: 18px;\n                    font-weight: 400;\n                }\n            }\n        }\n\n        .body {\n            display: flex;\n            flex-direction: column;\n            /* margin-bottom: 50px; */\n\n            .factured {\n                display: flex;\n                flex-direction: column;\n                align-items: flex-end;\n    \n                color: var(--grey2);\n                font-weight: 300;\n                font-size: 12px;\n                align-self: flex-end;\n\n    \n                .name {\n                    color: black;\n                    font-size: 18px;\n                    font-weight: 400;\n                }\n            }\n\n        }\n        \n        .amounts {\n            display: flex;\n            flex-direction: column;\n            /* margin-bottom: 50px; */\n\n            .titled {\n                color: var(--grey2);\n            }\n\n            .table {\n    \n                border-spacing: 0px;\n                border-collapse: collapse;\n                /* background-color: transparent; */\n                border-radius: 10px;\n                margin-bottom: 50px;\n                /* text-align: center; */\n    \n                td {\n                    padding: 10px;\n                    padding-top: 5px;\n                    padding-bottom: 5px;\n                }\n    \n                .field {\n                    color: var(--grey2);\n                    font-weight: 300;\n                    text-align: left;\n                    font-size: 12px;\n                }\n    \n                .field:last-of-type {\n                    border-bottom: 1px var(--grey1) solid;\n                }\n    \n                .field:nth-child(odd) {\n                    background-color: var(--default2);\n                }\n    \n                .titles {\n                    background-color: var(--default);\n                    color: white;\n                    text-transform: uppercase;\n                    font-size: 12px;\n                }\n    \n                .titles td:first-child {\n                    border-top-left-radius: 10px;\n                    border-bottom-left-radius: 10px;\n                }\n    \n                .titles td:last-child {\n                    border-top-right-radius: 10px;\n                    border-bottom-right-radius: 10px;\n                }\n    \n            }\n\n            .total {\n                align-self: flex-end;\n\n                display: flex;\n                flex-direction: row;\n                justify-content: space-between;\n                background-color: var(--default2);\n                border-radius: 10px;\n                font-weight: 400;\n                padding: 10px;\n\n                .text {\n                    color: var(--default);\n                    margin-right: 10px;\n                }\n            }\n\n            .tvanon {\n                align-self: flex-end;\n                font-size: 10px;\n                color: var(--grey2);\n            }\n        }\n\n        .message {\n            /* margin-bottom: 50px; */\n            color: var(--grey2);\n        }\n\n        .bank {\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            background-color: var(--default2);\n            border-radius: 10px;\n            padding: 10px;\n\n            .title {\n                color: black;\n            }\n\n            .group {\n                display: flex;\n                flex-direction: row;\n\n                .title {\n                    color: var(--default);\n                    margin-right: 5px;\n                }\n\n                .value {\n                    color: var(--grey2);\n                }\n            }\n        }\n    }\n"])),(function(_){return _.color}),(function(_){return _.color2}))}},[[35,1,2]]]);
//# sourceMappingURL=main.68a0b2ed.chunk.js.map