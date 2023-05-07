
import { TextField, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { grey } from '@mui/material/colors';
import './textBox.css';

const TextBox = ({ value, onChange }) => {
  return (
      <>
        <TextField
            sx={{ '& .MuiInput-underline:after': { borderBottomColor: 'black' }, '& label.Mui-focused': { color: 'black' } }}
            id="text-field"
            label="Pesquisar Pizza"
            variant="standard"
            value={value}
            onChange={(e) => {
              onChange(e.target.value)
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
            fullWidth
        />
    </>
  );
}

export { TextBox };