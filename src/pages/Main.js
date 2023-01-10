import React, { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Contact from './Contact';
import { Home } from './Home';
import About from './About'
import { BrowserRouter, Route, Routes, useLocation, useParams, useSearchParams } from 'react-router-dom';

const Main = (props) => {
    const pages = [
        { path: '/', name: 'home', order: 1 },
        { path: '/about-us', name: 'about-us', order: 2 },
        { path: '/contact-us', name: 'contact-us', order: 3 }
    ]
    const location = useLocation()
console.log(location)
    const currentKey = location.pathname.split("/")[1] || "/";

    const [currentPage, setCurrentPage] = useState(location.pathname)
    const [currentPageOrder, setCurrentPageOrder] = useState(location.pathname)
    const [newPageOrder, setNewPageOrder] = useState(null)
    const [pageDirection, setPageDirection] = useState()
    useEffect(() => {
        setPage(location.pathname)
        setCurrentOrder(location.pathname)
    }, [])

    useEffect(() => {
        let newPage = setPage(location.pathname);
        let newPageOrder = pages.filter(function (page) {
            return page.path === newPage;
        });

        let curPage = currentPage;
        let curPageOrder = pages.filter(function (page) {
            return page.name === curPage;
        });
        console.log(curPageOrder, currentPage)

        if( newPage !== curPage){
            console.log('new page');
            let direction = curPageOrder[0].order < newPageOrder[0].order ? 'left' : 'right';
            // Set State
            setCurrentPage(newPage)
            setCurrentPageOrder(curPageOrder[0].order)
            setNewPageOrder(newPageOrder[0].order)
            setPageDirection(direction)
        
           
        }
    }, [location.pathname])

    const setCurrentOrder = (path) => {
        let curPageOrder = pages.filter(function (page) {
            return page.path === path;
        });
        
        return curPageOrder[0].order;
    }

    const setPage = (pathname) => {
        let page = null;
        switch (pathname){
            case('/'):
                page = 'home';
                break;
            case('/about-us'):
                page = 'about-us';
                break;
            case('/contact-us'):
                page = 'contact-us';
                break;
            default:
                page = 'home';
            
        }
       
        return page;
    }
  return (
    <div className={`wrap ${currentKey} `}>
    <TransitionGroup  className={`transition-group ${pageDirection}`}>
        <CSSTransition
            key={currentKey}
            timeout={{ enter: 800, exit: 400 }}
            classNames={'transition-wrap'}
            
        >
            
            <section className={`route-section fade`}>
                <Routes>
                    <Route exact path="/" component={() => <Home />} />
                    <Route path="/about-us" component={() => <About /> } />
                    <Route path="/contact-us" component={() => <Contact /> } />  
                </Routes>
            </section>
           
        </CSSTransition>
    </TransitionGroup>
</div>
  )
}

export default Main