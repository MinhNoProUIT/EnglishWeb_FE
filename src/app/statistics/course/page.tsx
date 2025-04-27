"use client";

import { Box, Typography } from "@mui/material";

import ManageCourse from "./ManageCourse";
import RevenueChart from "./RevenueChart";
import TableTracsaction from "./TableTracsaction";

export default function CourseManagementPage() {
    return (
        <Box>
            <Typography variant="h4" fontWeight="bold" mb={2}>
                Quản lý khoá học
            </Typography>

            <Box display="flex" flexDirection="column" gap={2}>
                <ManageCourse />
                <RevenueChart />
                <TableTracsaction />
            </Box>
        </Box>
    );
}
