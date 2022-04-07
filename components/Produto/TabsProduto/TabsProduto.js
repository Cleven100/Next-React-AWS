import React from 'react'
import {Tab} from "semantic-ui-react";

export default function TabsProduto(props) {
    const { produto } = props;

    const panes = [
        {
            menuItem: "Informação",
            render: () => (
                <Tab.Pane>
                    <h1>Info Produto</h1>
                </Tab.Pane>
            ),
        },
        {
            menuItem: "Comentários",
            render: () => (
                <Tab.Pane>
                    <h1>Lista de Comentários</h1>
                </Tab.Pane>
            ),
        }
    ]

     
    return (
        <Tab className="tabs-produto" panes={panes} />
    )
}