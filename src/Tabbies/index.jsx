import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export function Tabbies() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        TabIndicatorProps={{
            sx: {
              bgcolor: '#D8BFD8',
              color: '#D8BFD8'
            }
          }}
      >
        <Tab value="one" label="Work I Like 🤔" />
        <Tab value="two" label="Building Inclusive Communities 🔮" />
        <Tab value="three" label="See the Rezzy 💌" />
      </Tabs>
  );
}