import React from "react";
import { useParams } from "react-router-dom";

import useAsync from "../helpers/hooks/useAsync";
import fetch from "../helpers/fetch";

import Breadcrumb from "../components/Breadcrumb";

import Header from "../parts/Header";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";

import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";

function LoadingProductDetails() {
  return (
    <section className="container mx-auto px-8 py-2 md:px-10 lg:px-16">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <div className="w-80 h-10 mb-3 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {Array(5)
                .fill()
                .map((_, index) => {
                  return (
                    <div className="px-4 relative card group" key={index}>
                      <div
                        className="rounded-xl item bg-gray-300 animate-pulse"
                        style={{ width: 106, height: 106 }}
                      ></div>
                    </div>
                  );
                })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <div className="bg-gray-300 animate-pulse rounded-lg h-full item overflow-hidden"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <div className="w-80 h-6 mb-3 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-40 h-6 mb-5 bg-gray-300 animate-pulse rounded-full"></div>

          <div className="w-52 h-10 bg-gray-300 animate-pulse rounded-full"></div>

          <hr className="my-8" />

          <div className="w-40 h-4 mb-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-96 h-4 mb-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full max-w-xl h-4 mb-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full max-w-md h-4 mb-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full max-w-xs h-4 mb-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-full max-w-xs h-4 mb-6 bg-gray-300 animate-pulse rounded-full"></div>
          <div className="w-60 h-4 mb-6 bg-gray-300 animate-pulse rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function LoadingSuggestion() {
  return (
    <section className="bg-gray-100 px-8 md:px-10 lg:px-16 py-16">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex mb-4 -mx-3">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div
                  className="px-3 flex-none"
                  style={{ width: 320 }}
                  key={index}
                >
                  <div className="rounded-xl p-4 pb-8 relative bg-white">
                    <div className="rounded-xl overflow-hidden card-shadow w-full h-52 mb-6">
                      <div className="rounded-xl item bg-gray-300 animate-pulse h-full"></div>
                    </div>
                    <div className="w-56 h-3 mb-3 bg-gray-300 animate-pulse rounded-full"></div>
                    <div className="w-40 h-3 bg-gray-300 animate-pulse rounded-full"></div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default function Details(props) {
  const { idp } = useParams();

  const { data, run, isLoading } = useAsync();

  React.useEffect(() => {
    run(fetch({ url: `/api/products/${idp}` }));
  }, [run]);

  return (
    <>
      <Header theme="black" />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1234", name: "Office Room" },
          { url: "/categories/1234/products/321", name: "Details" },
        ]}
      />

      {isLoading ? <LoadingProductDetails /> : <ProductDetails data={data} />}
      {isLoading ? (
        <LoadingSuggestion />
      ) : (
        <Suggestion data={data?.relatedProducts || {}} />
      )}

      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
