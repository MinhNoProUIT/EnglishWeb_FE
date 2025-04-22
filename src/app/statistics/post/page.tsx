'use client';

import { Box } from '@mui/material';
import RatioPost from './RatioPost';
import PostChart from './PostChart';
import TablePost from './TablePost';
import RankLike from './RankLike';

const commonBoxStyle = {
    backgroundColor: 'var(--background-color)',
    borderRadius: 2,
    boxShadow: 'var(--box-shadow-paper)',
    p: 2
};

export default function PostManagementPage() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                backgroundColor: 'var(--background-color)',
                p: 2 // padding toàn trang nếu cần
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

            <Box sx={{ ...commonBoxStyle }}>
                <TablePost />
            </Box>
        </Box>
    );
}
