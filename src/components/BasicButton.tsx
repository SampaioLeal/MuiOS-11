import { alpha, ButtonBase, styled } from "@mui/material";

const BasicButton = styled(ButtonBase)(({ theme }) => ({
  borderRadius: 6,
  background: theme.buttons.basicButton,
  padding: theme.spacing(1),
  color: theme.palette.getContrastText(theme.buttons.basicButton),
  border: `solid 1px ${theme.palette.divider}`,

  "&:hover": {
    background: alpha(theme.palette.primary.dark, 0.1),
  },
}));

export default BasicButton;
