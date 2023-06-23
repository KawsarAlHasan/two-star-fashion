import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const handleAddProduct = async (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("file", image);

    formData.append("upload_preset", "v3hakopx");
    const url = "https://api.cloudinary.com/v1_1/daizkkv04/image/upload";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.asset_id) {
          const doctor = {
            productname: data.productname,
            productdescription: data.productdescription,
            productimage: imgData.secure_url,
            productsku: data.productsku,
            productbarcode: data.productbarcode,
            productprice: data.productprice,
            saleprice: data.saleprice,
            productquantity: data.productquantity,
            productslug: data.productslug,
            producttags: data.producttags,
          };

          // save doctor
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.name} is added successfully`);
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  return (
    <div className="w-96 p-7">
      <h2>Add a Doctor</h2>
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Title/Name</span>
          </label>
          <input
            type="text"
            {...register("productname", { required: "Name is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productname && (
            <p className="text-red-600">{errors.productname?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <input
            type="text"
            {...register("productdescription")}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productdescription && (
            <p className="text-red-600">{errors.productdescription?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Image</span>
          </label>
          <input
            type="file"
            {...register("image", { required: "Email is required" })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.img && <p className="text-red-600">{errors.img?.message}</p>}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product SKU</span>
          </label>
          <input
            type="text"
            {...register("productsku")}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productsku && (
            <p className="text-red-600">{errors.productsku?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Barcode</span>
          </label>
          <input
            type="text"
            {...register("productbarcode")}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productbarcode && (
            <p className="text-red-600">{errors.productbarcode?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Price</span>
          </label>
          <input
            type="text"
            {...register("productprice", {
              required: "Product Price is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productprice && (
            <p className="text-red-600">{errors.productprice?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Sale Price</span>
          </label>
          <input
            type="text"
            {...register("saleprice")}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.saleprice && (
            <p className="text-red-600">{errors.saleprice?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Quantity</span>
          </label>
          <input
            type="text"
            {...register("productquantity", {
              required: "Product Quantity is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productquantity && (
            <p className="text-red-600">{errors.productquantity?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Slug</span>
          </label>
          <input
            type="text"
            {...register("productslug", {
              required: "Product Slug is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.productslug && (
            <p className="text-red-600">{errors.productslug?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Product Tags</span>
          </label>
          <input
            type="text"
            {...register("producttags", {
              required: "product tags is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.producttags && (
            <p className="text-red-600">{errors.producttags?.message}</p>
          )}
        </div>
        <input
          className="btn btn-secondary w-full mt-3"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
}

export default AddProduct;
