import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Box,
    Select,
    MenuItem,
    Typography,
    InputLabel,
    FormControl,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getTypeBgColor, getTypeTextColor } from "./VocabularyTable";

export default function WordCreateForm({
    open,
    onClose,
    onSubmit,
    initialData,
}: {
    open: boolean;
    onClose: () => void;
    onSubmit: (data: any) => void;
    initialData?: any;
}) {
    const [form, setForm] = useState({ eng: "", vie: "", transcription: "", type: "", course: "", example: "", image: "", });

    useEffect(() => {
        if (initialData) setForm(initialData);
        else setForm({ eng: "", vie: "", transcription: "", type: "", course: "", example: "", image: "", });
    }, [initialData]);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: "var(--background-item)",
                    color: "var(--text-color)",
                    padding: '10px 4px',
                    borderRadius: '15px',
                    margin: 0,
                },
                '& .MuiDialogContent-root': {
                    padding: 0,
                },
                "& fieldset": {
                    borderRadius: "10px",
                    borderColor: "var(--border-color)",
                },
                "& .MuiInputBase-input": {
                    padding: "15px 10px",
                    color: "var(--text-color)",
                    fontSize: "16px",
                    "&::placeholder": {
                        color: "var(--placeholder-color)",
                        opacity: 1,
                    },
                },
                "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "var(--hover-field-color)",
                },
                "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "var(--selected-field-color)",
                },
                "& .MuiFormLabel-root": {
                    color: "var(--text-color)",
                },
            }}
        >
            <DialogTitle sx={{
                padding: '8px 24px',
                paddingTop: '16px',
                fontWeight: 'bold',
                textAlign: 'center',
            }}>
                {initialData ? "Cập nhật từ vựng" : "Thêm từ vựng"}
            </DialogTitle>

            <DialogContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: '12px',
                    padding: '10px 24px'
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography>
                            Nghĩa tiếng Anh
                        </Typography>
                        <TextField fullWidth placeholder="Nhập nghĩa tiếng Anh" value={form.eng}
                            onChange={(e) => setForm({ ...form, eng: e.target.value })} />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography>
                            Nghĩa tiếng Việt
                        </Typography>
                        <TextField fullWidth placeholder="Nhập nghĩa tiếng Việt" value={form.vie}
                            onChange={(e) => setForm({ ...form, vie: e.target.value })} />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography>
                            Phiên âm
                        </Typography>
                        <TextField fullWidth placeholder="Nhập phiên âm" value={form.transcription}
                            onChange={(e) => setForm({ ...form, transcription: e.target.value })} />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: '18px',
                    }}>
                        <FormControl fullWidth sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography>
                                Loại từ
                            </Typography>
                            <Select
                                value={form.type}
                                onChange={(e) => setForm({ ...form, type: e.target.value })}
                                displayEmpty
                                sx={{
                                    height: '61px',
                                    "& .MuiSelect-icon": {
                                        color: "var(--text-color)",
                                    },
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            boxSizing: 'border-box',
                                            padding: "0 8px",
                                            border: "1px solid var(--border-color)",
                                            backgroundColor: "var(--background-item)",
                                            color: "var(--text-color)",
                                            "& .MuiMenuItem-root": {
                                                borderRadius: "6px",
                                                "&:hover": {
                                                    backgroundColor: "var(--hover-color)",
                                                },
                                                "&.Mui-selected": {
                                                    backgroundColor: "var(--selected-color)",
                                                },
                                            },
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="" disabled>
                                    Chọn loại từ     {/* placeholder */}
                                </MenuItem>
                                {["n", "v", "adj"].map((type) => (
                                    <MenuItem value={type}>
                                        <Box sx={{
                                            display: 'inline-flex',
                                            paddingX: 1.5,
                                            paddingY: 0.5,
                                            borderRadius: 2,
                                            backgroundColor: getTypeBgColor(type),
                                            color: getTypeTextColor(type),
                                            fontWeight: 'bold',
                                        }}>
                                            {type}
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                            <Typography>
                                Khoá học
                            </Typography>
                            <Select
                                value={form.course}
                                onChange={(e) => setForm({ ...form, course: e.target.value })}
                                displayEmpty
                                sx={{
                                    height: '61px',
                                    "& .MuiSelect-icon": {
                                        color: "var(--text-color)",
                                    },
                                }}
                                MenuProps={{
                                    PaperProps: {
                                        sx: {
                                            boxSizing: 'border-box',
                                            padding: "0 8px",
                                            border: "1px solid var(--border-color)",
                                            backgroundColor: "var(--background-item)",
                                            color: "var(--text-color)",
                                            "& .MuiMenuItem-root": {
                                                borderRadius: "6px",
                                                "&:hover": {
                                                    backgroundColor: "var(--hover-color)",
                                                },
                                                "&.Mui-selected": {
                                                    backgroundColor: "var(--selected-color)",
                                                },
                                            },
                                        },
                                    },
                                }}
                            >
                                <MenuItem value="" disabled >
                                    Chọn khoá học     {/* placeholder */}
                                </MenuItem>
                                {["In court", "Sports", "Hang out with friends"].map((course) => (
                                    <MenuItem value={course}>
                                        {course}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography>
                            Ví dụ
                        </Typography>
                        <TextField fullWidth placeholder="Nhập ví dụ" value={form.example}
                            onChange={(e) => setForm({ ...form, example: e.target.value })} />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <Typography>
                            Hình ảnh
                        </Typography>
                        <TextField fullWidth placeholder="Nhập hình ảnh" value={form.image}
                            onChange={(e) => setForm({ ...form, image: e.target.value })} />
                    </Box>
                </Box>
            </DialogContent>

            <DialogActions sx={{
                alignSelf: 'center',
            }}>
                <Button onClick={onClose}
                    sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: 'var(--text-color)',
                        textTransform: "none",
                    }}
                >
                    Huỷ
                </Button>
                <Button onClick={() => onSubmit(form)} variant="contained"
                    sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        borderRadius: '8px',
                        backgroundColor: "#03d794",
                        textTransform: "none",
                    }}
                >
                    Lưu
                </Button>
            </DialogActions>
        </Dialog>
    );
}
