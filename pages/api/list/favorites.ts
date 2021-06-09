import dbConnect from "../../../utils/dbConnect";
import List from "../../../models/List";
import type { NextApiRequest, NextApiResponse } from 'next';


dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {

      const { method } = req;

  
      if (method == "GET") {
        try {
          const lists = await List.find({ favorite: true});

          console.log("results", lists);

          res.status(200).json({ success: true, data: lists });
        } catch (error) {
          res.status(400).json({ success: false });
        }
      } else if (method == "POST") {
        // create code
      } else {
        res.status(400).json({ success: false });
      }


 }