// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import questions from '../questionsBd';
import QuestionModel from "../../../../model/question_model";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>,
) {
  const id = +(req.query?.id ?? 0);
  res.status(200).json(questions[0].toMap());
}
