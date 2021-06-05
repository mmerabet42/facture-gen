import React from 'react';

import { useLocation } from 'react-router-dom';

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

import {
    MenuContainer,
    JsonEditorContainer,
    InvoiceViewContainer,
    CButton
} from './style';

export const Menu = ({ setCurrentRef }) => {

    const reference = (new URLSearchParams(useLocation().search)).get("r");

    React.useEffect(() => {
        if (reference)
            setCurrentRef(reference);
    });

    let invoices = [];
    let last_invoice = null;
    for (let i = 0; i < localStorage.length; ++i) {
        const itemName = localStorage.key(i);
        if (itemName.startsWith("facture-gen-"))
            invoices.push(itemName.substr(12));
        else if (itemName === "last-facture-gen")
            last_invoice = JSON.parse(localStorage.getItem("last-facture-gen")).reference;
    }

    return (
        <MenuContainer>
            <CButton onClick={() => setCurrentRef("")}>New Invoice</CButton>
            <div className="invoices">
                <p className="title0">Last</p>
                {last_invoice ? <button className="invoice" onClick={() => setCurrentRef(last_invoice)}>{last_invoice}</button> : null}
                <p className="title1">Saved</p>
                <div className="list">
                    {invoices.map((name, i) => (
                        <button key={i} className="invoice" onClick={() => setCurrentRef(name)}>{name}</button>
                    ))}
                </div>
            </div>
        </MenuContainer>
    );
};

export const JsonEditor = ({ reference }) => {
    const [ generateButton, setGenerateButton ] = React.useState(false);
    const [ generateState, setGenerateState ]  = React.useState(null);

    React.useEffect(() => {
        let refItem = null;
        if (!reference || reference === "")
        {
            refItem = 
`{
    "reference": "",
    "date": "",
            
    "factureby": {    
        "name": "",
        "infos": []
    },
            
    "factureto": {
        "name": "",
        "infos": []
    },
            
    "entitled": "",
    "totalFormula": "",
    "invoices": [],
    "message": "",
    "infos": {}
}`;
        }
        else
        {
            refItem = localStorage.getItem("facture-gen-" + reference);
            if (!refItem)
                return;
        }
        setGenerateState(refItem);
    }, []);

    const generateStart = () => {
        const jsoned = JSON.parse(generateState);

        if (!jsoned || !jsoned.reference || jsoned.reference === "")
            return ;

        localStorage.setItem("facture-gen-" + jsoned.reference, generateState);
        localStorage.setItem("last-facture-gen", generateState);
        setGenerateButton(true);
        setGenerateState(jsoned);
    }

    return (
        generateButton
        ?
        <InvoiceView attrs={generateState} />
        :
        <JsonEditorContainer>
            <div className="textarea">
                <AceEditor
                    mode="json"
                    theme="github"
                    value={generateState}
                    onChange={(data) => setGenerateState(data)}
                    width="100%"
                    height="100%"
                />
            </div>
            <CButton onClick={() => generateStart()}>Generate</CButton>
        </JsonEditorContainer>
    )
};

const InvoiceView = ({ attrs }) => {
    var total = 0;

    React.useEffect(() => {
        window.print();
    });

    return (
        <InvoiceViewContainer>
            <div className="container">  
                <div className="header">
                    <div className="top">
                        <p className="title">FACTURE</p>
                        <p className="ref">N° {attrs.reference}</p>
                        <p className="date">{attrs.date}</p>
                    </div>
                    <div className="facturer">
                        <div className="by">Facturé par</div>
                        <div className="name">{attrs.factureby.name}</div>
                        {attrs.factureby.infos.map((info, k) =>
                            <div className="info" key={k}>{info}</div>
                        )}
                    </div>
                </div>

                <div className="body">
                    <div className="factured">
                        <div className="by">Facturé à</div>
                        <div className="name">{attrs.factureto.name}</div>
                        {attrs.factureto.infos.map((info, k) =>
                            <div className="info" key={k}>{info}</div>
                        )}
                    </div>
                </div>

                <div className="amounts">
                    <p className="titled">{attrs.entitled}</p>
                    <table className="table">
                        {attrs.invoices.map((tr, i) => {
                            const f = tr.map(v => parseInt(v));
                            if (i !== 0 && attrs.totalFormula !== undefined)
                                eval(attrs.totalFormula);

                            return <tr key={i} className={i === 0 ? "titles" : "field"}>
                                {tr.map((td, j) => {
                                    var res = td;
                                    if (typeof td == "object")
                                        res = eval(res.formula) + td.next;

                                    return <td key={j}>{res}</td>
                                })}
                            </tr>
                        })}
                    </table>
                    <div className="total">
                        <p className="text">Total Hors Taxe</p>
                        <p className="amount">{total} €</p>
                    </div>
                    <p className="tvanon">TVA non applicable – article 293 B du CGI</p>
                </div>

                <div className="message">{attrs.message}</div>

                <div className="bank">
                    <p className="title">Coordonnées</p>
                    {Object.keys(attrs.infos).map((name, i) => 
                        <div className="group">
                            <p className="title">{name}</p>
                            <p className="value">{attrs.infos[name]}</p>
                        </div>
                    )}
                </div>

            </div>
        </InvoiceViewContainer>
    );
}