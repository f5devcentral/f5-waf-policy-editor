import * as React from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { TableBody } from "@mui/material";
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

export const PolicyTemplatesComponent: React.VoidFunctionComponent = () => {
  return (
    <TableContainer component={Box}>
      <Table>
        {/*<TableHead>*/}
        {/*  <TableRow>*/}
        {/*    <TableCell>*/}
        {/*      <Typography variant={"h6"}>Application</Typography>*/}
        {/*    </TableCell>*/}
        {/*    <TableCell>*/}
        {/*      <Typography variant={"h6"}>Description</Typography>*/}
        {/*    </TableCell>*/}
        {/*    <TableCell></TableCell>*/}
        {/*    <TableCell></TableCell>*/}
        {/*  </TableRow>*/}
        {/*</TableHead>*/}
        <TableBody>
          {[
            {
              app: "Wordpress",
              description:
                "Welcome to the world’s most popular website builder",
              ghLink:
                "https://github.com/464d41/waf-policy-templates/blob/master/policies/wordpress.json",
              wafflerLink:
                "https://waffler.dev/prod/?ref=https://raw.githubusercontent.com/464d41/waf-policy-templates/master/policies/wordpress.json",
            },
            {
              app: "Sharepoint",
              description:
                "Share and manage content, knowledge, and applications to empower teamwork, quickly find information, and seamlessly collaborate across the organization",
              ghLink: "",
              wafflerLink: "",
            },
            {
              app: "Mega CRM",
              description:
                "Customer relationship management is a process in which a business or other organization administers its interactions with customers, typically using data analysis to study large amounts of information",
              ghLink: "",
              wafflerLink: "",
            },
            {
              app: "Super ERP",
              description:
                "Enterprise resource planning is the integrated management of main business processes, often in real time and mediated by software and technology.",
              ghLink: "",
              wafflerLink: "",
            },
          ].map((item) => {
            return (
              <StyledTableRow>
                <TableCell>
                  <b>{item.app}</b>
                </TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>
                  {item.ghLink === "" ? undefined : (
                    <IconButton
                      color="inherit"
                      href={item.ghLink}
                      target="_blank"
                      rel="noreferrer"
                      size="large">
                      <GitHubIcon />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell>
                  {item.wafflerLink === "" ? undefined : (
                    <IconButton
                      color="inherit"
                      href={item.wafflerLink}
                      target="_blank"
                      rel="noreferrer"
                      size="large">
                      <EditIcon />
                    </IconButton>
                  )}
                </TableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
