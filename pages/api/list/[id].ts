import dbConnect from "../../../utils/dbConnect";
import List from "../../../models/List";
import type { NextApiRequest, NextApiResponse } from 'next';
import { Types } from "mongoose";


dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {

      const { 
          query: { id },
          method
         } = req;

  
      if (method == "GET") {
        try {
          const lists = await List.findById(id);

          console.log("results", lists);

          res.status(200).json({ success: true, data: lists });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else if (method == "POST") {
        try {
            const lists = await List.findByIdAndUpdate(id, { favorite: true });
  
            console.log("results", lists);

            if(!lists){
                res.status(400).json({ success: false });
            }
  
            res.status(200).json({ success: true, data: lists });
          } catch (error) {
            res.status(400).json({ success: false });
          }
         

      } else {
        res.status(400).json({ success: false });
      }


 }