/**
 * Created by RadAsm on 17/2/4.
 */

const domain_dev = "http://localhost:8081";
const domain_pro = "https://112.74.32.29:8081"
const domain_int = "https://112.74.32.29:8081";

export const getAllBlogs = domain_pro + "/blogs/getblogs";
export const getBlogDetailById = domain_pro + "/blogs/getBlogDetailById";
export const saveBlog = domain_pro + "/blogs/insertOne";
