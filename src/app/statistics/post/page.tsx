'use client';

import { Box } from '@mui/material';
import RatioPost from './RatioPost';
import PostChart from './PostChart';
import TablePost from './TablePost';
import RankLike from './RankLike';
import ReportPost from './ReportPost';

const commonBoxStyle = {
    borderRadius: 4,
    boxShadow: 'var(--box-shadow-paper)',
    p: 2,
    backgroundColor: "var(--background-item)"
};

export default function PostManagementPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                backgroundColor: 'var(--background-color)',
                p: 2
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 4,
                    flexWrap: 'wrap',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    <RatioPost />
                    <PostChart />
                </Box>

                <RankLike />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 4,
                    flex: 1,
                    minWidth: 0,
                }}
            >
                <Box
                    sx={{
                        ...commonBoxStyle,
                        flex: '7 1 0%',
                    }}
                >
                    <TablePost />
                </Box>

                <Box
                    sx={{
                        flex: '3 1 0%', // ⬅️ ReportPost chiếm 30%
                        minWidth: 0,
                    }}
                >
                    <ReportPost />
                </Box>
            </Box>

        </Box>
    );
}
