'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts/core';
import {
    TooltipComponent,
    LegendComponent,
    GridComponent,
    ToolboxComponent,
    TitleComponent,
} from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

echarts.use([
    TooltipComponent,
    LegendComponent,
    GridComponent,
    ToolboxComponent,
    TitleComponent,
    LineChart,
    CanvasRenderer,
]);

const generateMockData = (days: number) => {
    const data: { date: string; value: number }[] = [];
    const now = new Date();

    for (let i = days - 1; i >= 0; i--) {
        const date = new Date(now);
        date.setDate(now.getDate() - i);
        data.push({
            date: date.toLocaleDateString('vi-VN'),
            value: Math.floor(Math.random() * 100) + 1,
        });
    }

    return data;
};

const PostChart = () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const [range, setRange] = useState('7');
    const [data, setData] = useState(generateMockData(7));

    const { t } = useTranslation("common");

    useEffect(() => {
        if (!chartRef.current) return;

        const chartInstance = echarts.init(chartRef.current);

        const option: echarts.EChartsCoreOption = {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                top: 40,
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                },
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true,
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: data.map((item) => item.date),
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                    name: 'Bài đăng',
                    type: 'line',
                    smooth: true,
                    data: data.map((item) => item.value),
                },
            ],
        };

        chartInstance.setOption(option);

        return () => {
            chartInstance.dispose();
        };
    }, [data]);

    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setRange(value);
        setData(generateMockData(parseInt(value)));
    };

    return (
        <Box
            sx={{
                p: 2,
                borderRadius: 4,
                backgroundColor: 'var(--background-color)',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}
                >
                    {t("COMMON.POST.TITLE_CHART")}
                </Typography>
            </Box>
            <FormControl sx={{ mb: 2, minWidth: 200 }} size="small">
                <InputLabel id="time-range-select-label">Chọn khoảng thời gian</InputLabel>
                <Select
                    labelId="time-range-select-label"
                    value={range}
                    label="Chọn khoảng thời gian"
                    onChange={handleChange}
                >
                    <MenuItem value="7">7 ngày</MenuItem>
                    <MenuItem value="30">30 ngày</MenuItem>
                    <MenuItem value="90">3 tháng</MenuItem>
                </Select>
            </FormControl>

            <Box
                ref={chartRef}
                sx={{ height: 400, bgcolor: 'white', borderRadius: 2 }}
            />
        </Box>
    );
};

export default PostChart;
