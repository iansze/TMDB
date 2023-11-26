import { Backdrop, CircularProgress } from "@mui/material";

type LoadingProps = {
  open: boolean;
};

const Loading = ({ open }: LoadingProps) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loading;
