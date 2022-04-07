import React,{useState, useEffect} from 'react'
import { Grid, Image, Icon, Button, GridColumn } from 'semantic-ui-react';
import { size } from 'lodash';

export default function HeaderProduto(props) {
    const {produto} = props;
    const {poster, title} = produto;
    
    
    
        return (
        <Grid className="header-produto">
            <Grid.Column mobile={16} tablet={6} computer={5}>
              <Image src={poster.url}  alt={title}/>
            </Grid.Column>
            <Grid.Column mobile={16} table={10} computer={11}>
             <p>info</p>
            </Grid.Column> 
        </Grid>
    )

    
}