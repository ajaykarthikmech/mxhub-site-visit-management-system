import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
} from "@mui/material";

export default function AddCompanyDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>Add New Company</DialogTitle>

      <DialogContent>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 2,
            mt: 1,
          }}
        >
          <TextField label="Company Name" fullWidth />
          <TextField label="Company Code" fullWidth />
          <TextField label="Industry" fullWidth />
          <TextField label="GST Number" fullWidth />
          <TextField
            label="Website"
            fullWidth
            sx={{ gridColumn: { md: "1 / 3" } }}
          />
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>
          Cancel
        </Button>

        <Button variant="contained">
          Save Company
        </Button>
      </DialogActions>
    </Dialog>
  );
}