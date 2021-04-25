import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import SearchAutoComplete from '../../components/Dropdown/SearchAutoComplete';

function SearchTicket() {
  return (
    <div>
      <span style={{ color: '#808080' }}>Faça a pesquisa da sua passagem</span>
      <Card style={{
        display: 'flex', justifyContent: 'center', width: '30%', marginTop: 10
      }}
      >
        <CardContent>
          <SearchAutoComplete />
        </CardContent>
      </Card>
    </div>
  );
}

export default SearchTicket;