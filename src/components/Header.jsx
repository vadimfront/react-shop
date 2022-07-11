import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

export function Header() {


    useEffect(() => {
        let sidenav = document.querySelector('#slide-out');
        M.Sidenav.init(sidenav, {});
    }, [])


    return (
        <>
            <nav className="nav-wrapper black">
                <div className='container'>
                    <div className='row'>
                        <div>
                            <a href="#!" className="brand-logo">React Shop</a>
                            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="#item1">Item 1</a></li>
                                <li><a href="#item2">Item 2</a></li>
                                <li><a href="#item3">Item 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <ul id="slide-out" className="sidenav">
                <li><a href="#item1">Item 1</a></li>
                <li><a href="#item2">Item 2</a></li>
                <li><a href="#item3">Item 3</a></li>
            </ul>
        </>
    )
}