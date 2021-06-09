
import Link from "next/link";
import styles from '../styles/Desktop.module.scss'
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import unfetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";

export default function Desktop() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const res: any = await unfetch("http://localhost:3000/api/list");
        const response: any = await res.json();
        console.log("results", response);
        setData(response.data);
    }

    const updateFavorite = async (id) => {
        const res: any = await unfetch(`http://localhost:3000/api/list/${id}`, { method: "POST" });
        getData();
    }

    return (
        <>
            <div className={styles.deskNav}>
                <p className={styles.navHome}>HOME</p>
                <Link href="/desktopFav">
                    <p className={styles.navLike}>LIKED</p>
                </Link>
            </div>
            {
                data.map((item: any, index) => {
                    return (
                        <div key={`mob-${index}`} className={styles.deskCont}>
                            <div className={styles.mobileCardHeader}>
                                <img src={item.profile}
                                    alt="Girl in a jacket" width="40" height="40" className={styles.imageProf} />
                                <p className={styles.name}>{item.name}</p>
                            </div>
                            <div className={styles.nameCont}>
                                <img src={item.image}
                                    alt="Girl in a jacket" width="100%" height="270" />
                            </div>
                            <p className={styles.descrp}>{item.description}</p>
                            <p className={styles.price}>AED {item.price}</p>

                            <FontAwesomeIcon icon={faHeart} color="#00059f" height="20px"
                                style={{ position: "absolute", marginTop: "-40px", color: item.favorite ? "palevioletred" : "white", marginLeft: "430px" }}
                                onClick={() => updateFavorite(item._id)} />
                            <div>
                                <div className={styles.footerLikes}>

                                    <FontAwesomeIcon icon={faHeart} color="#00059f" height="16px" className={styles.like} />
                                    <p className={styles.likeDes}>{item.no_of_likes} likes</p>
                                </div>
                                <div>
                                    <p className={styles.hashdesc}>{item.postDesc}</p>
                                    <p className={styles.hashtag}>{item.hashtag}</p>
                                </div>
                                <div>
                                    <p className={styles.comment}>View {item.no_of_comments} Comments</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    )
                })

            }
        </>
    )

}