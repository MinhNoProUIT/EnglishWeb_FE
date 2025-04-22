"use client";

import { IPostListItem } from '@/interfaces/post.interface';
import { Box, List, ListItem, Typography, Avatar, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

const mockPosts: IPostListItem[] = [
  {
    id: 1,
    title: "Button on home page is unresponsive",
    createdBy: "Nguyễn Văn A",
    createdById: "U001",
    createdByAvatar: "",
    createdDate: new Date(),
    totalPosts: 5,
    likesCount: 12,
    sharesCount: 4,
    isReported: true,
  },
  {
    id: 2,
    title: "Image not loading on profile page",
    createdBy: "Trần Thị B",
    createdById: "U002",
    createdByAvatar: "",
    createdDate: new Date("2024-12-10T14:48:00"),
    totalPosts: 2,
    likesCount: 20,
    sharesCount: 6,
    isReported: true,
  },
  {
    id: 3,
    title: "Crash when clicking settings",
    createdBy: "Lê Văn C",
    createdById: "U003",
    createdByAvatar: "",
    createdDate: new Date("2024-12-01T09:20:00"),
    totalPosts: 7,
    likesCount: 35,
    sharesCount: 12,
    isReported: true,
  },
  {
    id: 4,
    title: "Login fails with correct credentials",
    createdBy: "Phạm Duy K",
    createdById: "U004",
    createdByAvatar: "",
    createdDate: new Date("2024-11-25T11:10:00"),
    totalPosts: 4,
    likesCount: 9,
    sharesCount: 3,
    isReported: false,
  },
  {
    id: 5,
    title: "Cannot upload avatar",
    createdBy: "Đinh Thị D",
    createdById: "U005",
    createdByAvatar: "",
    createdDate: new Date("2024-11-20T10:30:00"),
    totalPosts: 6,
    likesCount: 25,
    sharesCount: 5,
    isReported: true,
  },
  {
    id: 6,
    title: "Page freezes when scrolling",
    createdBy: "Lương Văn E",
    createdById: "U006",
    createdByAvatar: "",
    createdDate: new Date("2024-11-18T08:45:00"),
    totalPosts: 3,
    likesCount: 17,
    sharesCount: 2,
    isReported: false,
  },
];

const aggregateEmployees = () => {
  const map = new Map<string, { id: string; name: string; avatar: string; count: number }>();

  for (const post of mockPosts) {
    if (!map.has(post.createdById)) {
      map.set(post.createdById, {
        id: post.createdById,
        name: post.createdBy,
        avatar: post.createdByAvatar,
        count: post.likesCount,
      });
    } else {
      const existing = map.get(post.createdById)!;
      existing.count += post.likesCount;
    }
  }

  return Array.from(map.values()).sort((a, b) => b.count - a.count);
};

const RankLike = () => {
  const { t } = useTranslation('common')

  const employees = aggregateEmployees();
  const topThree = employees.slice(0, 3);

  const topFive = mockPosts
    .sort((a, b) => b.likesCount - a.likesCount)
    .slice(0, 5)
    .map((item) => ({
      id: item.id,
      name: item.createdBy,
      avatar: item.createdByAvatar,
      count: item.likesCount,
    }));

  const podiumOrder = [
    topThree[1] || null, // 2nd place
    topThree[0] || null, // 1st place
    topThree[2] || null, // 3rd place
  ];

  const podiumHeights = [128, 160, 96]; // pixel heights for 2nd, 1st, 3rd

  const getMedalIcon = (position) => {
    if (position === 1) return '👑';
    if (position === 2) return '🥈';
    if (position === 3) return '🥉';
    return null;
  };



  return (
    <Paper elevation={4} sx={{ width: '100%', maxWidth: 420, bgcolor: 'primary.main', borderRadius: 2, overflow: 'hidden' }}>
      {/* Header + Tabs */}
      <Box sx={{ p: 2 }}>
        <Typography textAlign="center" variant="h6" color="white" fontWeight="bold"> {t('COMMON.POST.TITLE_TOP_RANKING')}</Typography>
      </Box>

      {/* Podium */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'end', bgcolor: 'primary.light', px: 2, pt: 6 }}>
        {podiumOrder.map((employee, index) => {
          if (!employee) return <Box key={index} flex={1} />;

          const position = [2, 1, 3][index];
          const height = podiumHeights[index];

          return (
            <Box key={employee.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 1 }}>
              {/* Avatar + Medal */}
              <Box sx={{ position: 'relative', mb: 1 }}>
                <Avatar
                  src={employee.avatar || undefined}
                  sx={{
                    width: 56,
                    height: 56,
                    border: '3px solid',
                    borderColor:
                      position === 1 ? 'warning.main' :
                        position === 2 ? 'grey.400' :
                          'orange',
                    boxShadow: 3
                  }}
                >
                  {!employee.avatar && '👤'}
                </Avatar>
                <Box sx={{ position: 'absolute', top: -10, right: -10, fontSize: 20 }}>
                  {getMedalIcon(position)}
                </Box>
              </Box>

              {/* Name */}
              <Typography variant="body2" color="white" sx={{ maxWidth: 80, textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {employee.name.split(' ').pop().slice(0, 10)}
              </Typography>

              {/* Podium block */}
              <Box sx={{
                height: height,
                width: 64,
                bgcolor: 'white',
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                mt: 1.5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'start',
                pt: 1.2,
              }}>
                <Typography variant="h5" color="primary" fontWeight="bold">
                  {position}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {/* List */}
      <Box sx={{ bgcolor: 'white', p: '2px 2px 0', borderTop: '1px solid #eee', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
        <List disablePadding>
          {topFive.map((employee, index) => (
            <ListItem key={employee.id} sx={{ py: 1.5, borderBottom: index !== employees.length - 1 ? '1px solid #eee' : 'none', display: 'flex', alignItems: 'center' }}>
              {/* Rank circle */}
              <Box sx={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                bgcolor:
                  index === 0 ? 'warning.main' :
                    index === 1 ? 'grey.400' :
                      index === 2 ? 'orange' :
                        'grey.200',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2,
                fontSize: 12,
                fontWeight: 'bold'
              }}>
                {index + 1}
              </Box>

              {/* Avatar */}
              <Avatar src={employee.avatar || undefined} sx={{ width: 32, height: 32, mr: 2 }}>
                {!employee.avatar && '👤'}
              </Avatar>

              {/* Info */}
              <Box sx={{ flexGrow: 1 }}>
                <Typography fontSize={14} fontWeight={500}>{employee.name}</Typography>
                <Typography fontSize={12} color="text.secondary">{employee.id}</Typography>
              </Box>

              {/* Count badge */}
              <Box sx={{
                bgcolor: index < 3 ? 'green.500' : 'green.400',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: 12,
                fontWeight: 500
              }}>
                {employee.count}
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default RankLike;
