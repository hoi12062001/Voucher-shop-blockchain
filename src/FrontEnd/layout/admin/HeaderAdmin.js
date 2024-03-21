
    import ListAll from "../../../ListAll";
    function HeaderAdmin() {
        return (
            <div >
                <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                    <div class="logo"><a href="index.html"><img class="w-25 " src="../images/logo.png" alt="" /></a></div>
                   
                    <div style={{ paddingLeft: '19rem' }} class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ListAll></ListAll>
                    </div>
                </nav>
            </div>
        );
    }
    export default HeaderAdmin;
