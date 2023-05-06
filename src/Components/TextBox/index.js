
import { TextField, InputAdornment } from '@mui/material'
import { styled } from '@mui/material/styles';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { grey } from '@mui/material/colors';
import './textBox.css';

const TextBox = ({ value, onChange }) => {
  //------------ Styled Components ---------------------------
    const StyledTextField = styled(TextField)({
      '& label.Mui-focused': {
        color: grey[600],
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: grey[600],
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: grey[600],
        },
        '&:hover fieldset': {
          borderColor: grey[600],
        },
        '&.Mui-focused fieldset': {
          borderColor: grey[600],
        },
      },
    });
  //------------ ------------------ ---------------------------
  return (
    <>
        <StyledTextField
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