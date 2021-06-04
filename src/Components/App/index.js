import React from 'react';

import { useLocation } from 'react-router-dom';

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

import {
    AppAreaContainer,
    AppContainer
} from './style';

export const App = () => {
    const [ generateButton, setGenerateButton ] = React.useState(false);
    const [ generateState, setGenerateState ]  = React.useState(null);

    const reference = (new URLSearchParams(useLocation().search)).get("r");

    React.useEffect(() => {
        let refItem = null;
        if (!reference)
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
            refItem = localStorage.getItem(reference);
            if (!refItem)
                return;
        }
        setGenerateState(refItem);
    }, []);

    const generateStart = () => {
        const jsoned = JSON.parse(generateState);
        localStorage.setItem(jsoned.reference, generateState);
        setGenerateButton(true);
        setGenerateState(jsoned);
    }

    return (
        generateButton
        ?
        <AppL attrs={generateState} />
        :
        <AppAreaContainer>
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
            <button onClick={() => generateStart()}>Generate</button>
        </AppAreaContainer>
    )
};

const AppL = ({ attrs }) => {
    var total = 0;

    return (
        <AppContainer>
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
        </AppContainer>
    );
}