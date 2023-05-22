const Wrapper = ({ children }) => {
    return <div style={
        {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '25px'
        }
    }>
        {children}
    </div>
}

export default Wrapper;