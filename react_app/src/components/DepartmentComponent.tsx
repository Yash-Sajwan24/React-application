import { useState } from "react";
import {
  Checkbox,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Department } from "../types";

interface DepartmentComponentProps {
  department: Department;
}

function DepartmentComponent({ department }: DepartmentComponentProps) {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <ListItemButton onClick={handleToggle}>
        {/* Icon to expand/collapse */}
        {expanded ? "-" : "+"}
        <ListItemText primary={department.name} />
      </ListItemButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {department.subDepartments.map((subDept) => (
            <ListItemButton key={subDept.id}>
              <Checkbox checked={selected} onClick={handleSelect} />
              <ListItemText primary={subDept.name} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </div>
  );
}

export default DepartmentComponent;
