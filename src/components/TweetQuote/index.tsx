

 import React, {type ReactNode} from 'react';

 import clsx from 'clsx';
 
 import styles from './styles.module.css';
 
 export interface Props {
   url: string;
   handle: string;
   name: string;
   job: string;
   children: ReactNode;
 }
 
 export default function TweetQuote({
   url,
   handle,
   name,
   job,
   children,
 }: Props): JSX.Element {
   const avatar = `https://unavatar.io/twitter/${handle}`;
   const profileUrl = `https://twitter.com/${handle}`;
   return (
     <figure className={styles.tweetQuote}>
       <blockquote>
         <a href={url} target="_blank" rel="noreferrer nofollow">
           {children}
         </a>
       </blockquote>
       <figcaption>
         <a href={profileUrl} target="_blank" rel="noreferrer nofollow">
           <div className="avatar">
             <img
               alt={name}
               className={clsx('avatar__photo', styles.avatarImg)}
               src={avatar}
               title={name}
               // loading="lazy"
             />
             <div className={clsx('avatar__intro')}>
               <strong className="avatar__name">
                 <cite>{name}</cite>
               </strong>
               <small className="avatar__subtitle" itemProp="description">
                 {job}
               </small>
             </div>
           </div>
         </a>
       </figcaption>
     </figure>
   );
 }