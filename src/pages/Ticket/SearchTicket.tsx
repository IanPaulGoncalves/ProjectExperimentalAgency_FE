import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import Button from '../../components/Button/Button';
import SearchAutoComplete from '../../components/Dropdown/SearchAutoComplete';

function SearchTicket() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '30%' }}>
        <span style={{ color: '#808080' }}>Faça a pesquisa da sua passagem</span>
        <Card style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 10
        }}
        >
          <CardContent>
            <SearchAutoComplete />
            <SearchAutoComplete />
            <Button />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SearchTicket;