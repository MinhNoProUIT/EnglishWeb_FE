import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

export default function ConfirmDeleteDialog({ object, open, onClose, onConfirm }: {
    object: string,
    open: boolean,
    onClose: () => void,
    onConfirm: () => void
}) {
    return (
        <Dialog open={open} onClose={onClose}
            sx={{
                '& .MuiPaper-root': {
                    backgroundColor: "var(--background-item)",
                    color: "var(--text-color)",
                    padding: '20px 4px',
                    borderRadius: '15px'
                }
            }}
        >
            <DialogTitle>Bạn có chắc chắn muốn xoá {object} này không?</DialogTitle>

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
                    Không
                </Button>
                <Button variant="contained" color="error" onClick={onConfirm}
                    sx={{
                        fontSize: "14px",
                        fontWeight: "bold",
                        borderRadius: '8px',
                        textTransform: "none",
                    }}
                >
                    Có
                </Button>
            </DialogActions>
        </Dialog>
    );
}
