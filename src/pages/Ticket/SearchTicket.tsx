import {
  createStyles, makeStyles, Theme, Typography
} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Select from '@material-ui/core/Select';
import React from 'react';
import Button from '../../components/Button/Button';
import SearchAutoComplete from '../../components/Dropdown/SearchAutoComplete';

const useStyles = makeStyles((theme: Theme) => createStyles({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function SearchTicket() {
  const [value, setValue] = React.useState('female');
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <>
      <div className="banner">
        <div className="back-search" />
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 400
        }}
        >
          <div style={{ width: '30%' }}>
            <Typography variant="h6" style={{ color: '#fff' }}>
              Faça a pesquisa da sua passagem
            </Typography>
            <Card style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: 10
            }}
            >
              <CardContent>
                <div>
                  <div>
                    <SearchAutoComplete label="Cidade de origem" />
                    <SearchAutoComplete label="Cidade de destino" />
                  </div>
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Data de ida</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Data de volta</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div>
                    <FormControl component="fieldset">
                      <RadioGroup style={{ flexDirection: 'row' }} aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="ida" control={<Radio />} label="Somente ida" />
                        <FormControlLabel value="volta" control={<Radio />} label="Somente volta" />
                      </RadioGroup>
                    </FormControl>
                  </div>
                </div>
                <Button />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTicket;