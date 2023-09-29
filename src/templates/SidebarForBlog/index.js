import React from 'react';
import Sidebar from "../../components/Sidebar";
import SidebarItem from "../../components/Sidebar/SidebarItem";
import List from "../../components/UI/List";
import LI from "../../components/UI/List/Item";
import Anchor from "../../components/UI/Anchor";
import FeaturedBlog from "../../components/FeaturedBlog";
import Newsletter from "../../components/Newsletter";

import Blogs from "../../data/Blog/blog";
// import Categories from "../../data/Sidebar/sidebar";
import BannerImg from "../../assets/img/banner-poster.jpg";


const Categories = [
    {
        "id": 1,
        "cate_name": "EXPLORATION",
        "cate_link": "/"
    },
    {
        "id": 2,
        "cate_name": "MINING, PROCESSING &REFINING",
        "cate_link": "/"
    },
    {
        "id": 3,
        "cate_name": "SALE OF PRODUCT",
        "cate_link": "/"
    },
    {
        "id": 4,
        "cate_name": "FINANCIAL MANAGEMENT",
        "cate_link": "/"
    },
    {
        "id": 5,
        "cate_name": "REHABILITATION",
        "cate_link": "/"
    },
    {
        "id": 5,
        "cate_name": "MINE CLOSURE",
        "cate_link": "/"
    }
]

const SidebarForBlog = ({ classes }) => {
    return (
        <Sidebar classes={`col-lg-3 ${classes}`}>
            <SidebarItem title={'CATEGORIES'} classes={'single-sidebar-item-wrap'}>
                <List classes={'sidebar-list'}>
                    {
                        Categories.map(category => (
                            <LI key={category.id}><Anchor path={category.cate_link}>{category.cate_name}</Anchor></LI>
                        ))
                    }
                </List>
            </SidebarItem>

            <SidebarItem title={'FEATURED POSTS'} classes={'single-sidebar-item-wrap'}>
                <div className={'latest-blog-widget'}>
                    {
                        Blogs.reverse().slice(0, 4).map(post => (
                            <FeaturedBlog key={post.id} id={post.id} title={post.title} publishDate={post.publishDate} thumb={post.thumb} />
                        ))
                    }
                </div>
            </SidebarItem>

            <SidebarItem classes={'single-sidebar-item-wrap'}>
                <Newsletter />
            </SidebarItem>

            <SidebarItem classes={'single-sidebar-item-wrap'}>
                <img src={BannerImg} alt="Banner" />
            </SidebarItem>
        </Sidebar>
    );
};

export default SidebarForBlog;