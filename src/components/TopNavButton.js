import Button from '@mui/material/Button';

export default function TopNavButton({children}) {
    return <Button color='text' variant="text" sx={
        {
            fontWeight: 'bold',
            fontSize: 16,
            letterSpacing: 1
        }
    }>{children}</Button>
}