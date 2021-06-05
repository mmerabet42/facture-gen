import styled from 'styled-components';

export const MenuContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap');
    font-family: Poppins;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;

    p {
        margin-block-start: 0px;
        margin-block-end: 0px;
    }

    .invoices {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .no {
            color: var(--grey2);
        }

        .list {
                display: flex;
                flex-direction: column;
            }

        .invoice {
            cursor: pointer;
            border: none;
            background-color: transparent;
            outline: none;
            font-family: inherit;
            font-size: 20px;
        }
    }

    .clear {
        font-family: inherit;
        border: none;
        outline: none;
        padding: 20px;
    }

`;

export const JsonEditorContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap');
    font-family: Poppins;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    

    .textarea {
        flex: 1;
    }
`;

export const CButton = styled.button`
    background-color: var(--blue);
    color: white;
    font-family: Poppins;
    font-size: 20px;
    border: none;
    outline: none;
    padding: 20px;
`;

export const InvoiceViewContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap');
    -webkit-print-color-adjust: exact;
    font-family: Poppins;
    height: 100%;

    p {
        margin-block-start: 0px;
        margin-block-end: 0px;
    }

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 30px;
        margin-right: 30px;

        .by {
            color: var(--blue);
            background-color: var(--grey1);
            border-radius: 10px;
            padding-left: 10px;
            padding-right: 10px;
        }

        .header {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            /* background-color: #638AE6; */
            color: black;
            font-weight: 300;
            border-radius: 15px;
            padding: 10px;
            /* margin-bottom: 50px; */

            .top {
                font-size: 18px;
                color: var(--grey2);
                .title {
                    color: black;
                    font-size: 48px;
                    letter-spacing: 11px;
                    font-weight: 400;
                }
            }

            .facturer {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                color: var(--grey2);

                font-size: 12px;

                .name {
                    color: black;
                    font-size: 18px;
                    font-weight: 400;
                }
            }
        }

        .body {
            display: flex;
            flex-direction: column;
            /* margin-bottom: 50px; */

            .factured {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
    
                color: var(--grey2);
                font-weight: 300;
                font-size: 12px;
                align-self: flex-end;

    
                .name {
                    color: black;
                    font-size: 18px;
                    font-weight: 400;
                }
            }

        }
        
        .amounts {
            display: flex;
            flex-direction: column;
            /* margin-bottom: 50px; */

            .titled {
                color: var(--grey2);
            }

            .table {
    
                border-spacing: 0px;
                border-collapse: collapse;
                /* background-color: transparent; */
                border-radius: 10px;
                margin-bottom: 50px;
                /* text-align: center; */
    
                td {
                    padding: 10px;
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
    
                .field {
                    color: var(--grey2);
                    font-weight: 300;
                    text-align: left;
                    font-size: 12px;
                }
    
                .field:last-of-type {
                    border-bottom: 1px var(--grey1) solid;
                }
    
                .field:nth-child(odd) {
                    background-color: var(--blue2);
                }
    
                .titles {
                    background-color: var(--blue);
                    color: white;
                    text-transform: uppercase;
                    font-size: 12px;
                }
    
                .titles td:first-child {
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }
    
                .titles td:last-child {
                    border-top-right-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
    
            }

            .total {
                align-self: flex-end;

                display: flex;
                flex-direction: row;
                justify-content: space-between;
                background-color: var(--blue2);
                border-radius: 10px;
                font-weight: 400;
                padding: 10px;

                .text {
                    color: var(--blue);
                    margin-right: 10px;
                }
            }

            .tvanon {
                align-self: flex-end;
                font-size: 10px;
                color: var(--grey2);
            }
        }

        .message {
            /* margin-bottom: 50px; */
            color: var(--grey2);
        }

        .bank {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--blue2);
            border-radius: 10px;
            padding: 10px;

            .title {
                color: black;
            }

            .group {
                display: flex;
                flex-direction: row;

                .title {
                    color: var(--blue);
                    margin-right: 5px;
                }

                .value {
                    color: var(--grey2);
                }
            }
        }
    }
`;