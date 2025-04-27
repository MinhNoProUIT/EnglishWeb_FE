import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const RevenueChart = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation("common");

    useEffect(() => {
        if (chartRef.current) {
            const chartInstance = echarts.init(chartRef.current);

            const option = {
                tooltip: {
                    trigger: 'axis',
                },
                xAxis: {
                    type: 'category',
                    data: [
                        'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                        'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12',
                    ],
                },
                yAxis: {
                    type: 'value',
                    name: 'VNĐ',
                },
                series: [
                    {
                        data: [1200, 1500, 1800, 2000, 2100, 1900, 2300, 2500, 2700, 2900, 3100, 3300],
                        type: 'line',
                        smooth: true,
                        areaStyle: {},
                    },
                ],
            };

            chartInstance.setOption(option);

            return () => {
                chartInstance.dispose();
            };
        }
    }, []);

    return (
        <Card sx={{ borderRadius: 4, boxShadow: 2, p: 2, backgroundColor: 'var(--background-item)' }}>
            <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center', color: 'var(--text-color)' }}>
                    {t("COMMON.COURSE.TITLE_CHART")}
                </Typography>
                <Box
                    ref={chartRef}
                    sx={{
                        width: '100%',
                        height: '400px',
                    }}
                />
            </CardContent>
        </Card>
    );
};

export default RevenueChart;
