import MainLayout from "../../layouts/MainLayout";

import {
  Typography,
  Button,
  Box,
} from "@mui/material";
import { useState } from "react";
import AddCompanyDialog from "../../components/company/AddCompanyDialog";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import CompanySearch from "../../components/company/CompanySearch";
import CompanyGrid from "../../components/company/CompanyGrid";

export default function Companies() {
  return (
    <MainLayout>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          variant="h4"
          fontWeight={700}
        >
          Companies
        </Typography>

        <Button
  variant="contained"
  startIcon={<AddRoundedIcon />}
  onClick={() => setOpenDialog(true)}
>
          Add Company
        </Button>
      </Box>

      <CompanySearch />

      <CompanyGrid />
    <AddCompanyDialog
  open={openDialog}
  onClose={() => setOpenDialog(false)}
/>
    </MainLayout>
  );
}