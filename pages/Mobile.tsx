import Link from "next/link";
import styles from '../styles/Mobile.module.scss'
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import unfetch from "isomorphic-unfetch";
import { useEffect, useState } from "react";


 const Mobile = () => {
    
     const [data, setData] = useState([]);
     useEffect(() => {
         getData();
     }, [])

     const getData = async () => {
         const res: any = await unfetch("http://localhost:3000/api/list");
         const response: any = await res.json();
         setData(response.data);
     }

     const updateFavorite = async (id) => {
         const res: any = await unfetch(`http://localhost:3000/api/list/${id}`, { method: "POST" });
         getData();
     }

     return (
         <>
             <div className={styles.mobileNav}>
                 <FontAwesomeIcon icon={faHome} color="white" height="20px" />
                 <Link href="/mobileFav">
                     <FontAwesomeIcon icon={faHeart} color="white" height="20px" />
                 </Link>
             </div>
             <div className={styles.bottomdiv}>
             </div>

             {  data.length > 0 ?  data.map((item: any, index) => {
                 return (
                     <div key={`mob-${index}`}>
                         <div className={styles.mobileCardHeader}>
                             <img src={item.profile}
                                 alt="Girl in a jacket" width="40" height="40" className={styles.imageProf} />
                             <p className={styles.name}>{item.name}</p>
                         </div>
                         <div className={styles.profName}>
                             <img src={item.image}
                                 alt="Girl in a jacket" width="100%" height="260" />
                         </div>
                         <p className={styles.descrp}>{item.description}</p>
                         <p className={styles.price}>AED {item.price}</p>

                         <FontAwesomeIcon icon={faHeart} color="#00059f" height="20px"
                             style={{ position: "absolute", marginTop: "-40px", color: item.favorite ? "palevioletred" : "white", right: "22px" }}
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
              : <p>No Favorites to list</p>
             }
         </>
     )

}


  export default Mobile;