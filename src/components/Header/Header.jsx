"use client";
import { useRouter } from "next/navigation";
import ConnectButton from "../ConnectButton/ConnectButton";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="flex justify-between px-28 py-4 bg-slate-900 backdrop-blur-md border-b-2 border-gray-700 items-center">
      <div className="cursor-pointer" onClick={() => router.push("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="140"
          height="29"
          viewBox="0 0 196 47"
          fill="none"
        >
          <path
            d="M25.101 23.6046C25.101 18.0342 26.0062 12.7423 27.6425 7.97269C27.9558 7.27639 28.1299 6.51046 28.1299 5.70972C28.1299 2.57639 25.5884 0.0349121 22.4551 0.0349121C19.3218 0.0349121 16.7803 2.57639 16.7803 5.70972C16.7803 6.51046 16.9544 7.27639 17.2677 7.97269C18.8692 12.7075 19.7744 17.9297 19.8092 23.4305C19.8092 29.0008 18.904 34.2927 17.2677 39.0623C16.9544 39.7586 16.7803 40.5246 16.7803 41.3253C16.7803 44.4586 19.3218 47.0001 22.4551 47.0001C25.5884 47.0001 28.1299 44.4586 28.1299 41.3253C28.1299 40.5246 27.9558 39.7586 27.6425 39.0623C26.0062 34.3275 25.101 29.1053 25.101 23.6046Z"
            fill="url(#paint0_linear_636_588)"
          ></path>
          <path
            d="M5.67481 17.8252C2.54148 17.8252 0 20.3667 0 23.5C0 26.6333 2.54148 29.1748 5.67481 29.1748C8.80815 29.1748 11.3496 26.6333 11.3496 23.5C11.3844 20.3667 8.84296 17.8252 5.67481 17.8252Z"
            fill="url(#paint1_linear_636_588)"
          ></path>
          <path
            d="M55.8086 0C52.6753 0 50.1338 2.54149 50.1338 5.67482C50.1338 6.47556 50.3079 7.24149 50.6212 7.93779C52.2575 12.7422 53.1627 18.0341 53.1627 23.5696C53.1627 29.0704 52.2575 34.2926 50.6212 39.0274C50.3079 39.7237 50.1338 40.4896 50.1338 41.2904C50.1338 44.4237 52.6753 46.9652 55.8086 46.9652C58.9419 46.9652 61.4834 44.4237 61.4834 41.2904C61.4834 40.4896 61.3093 39.7237 60.996 39.0274C59.3597 34.223 58.4545 28.9311 58.4545 23.3956C58.4545 17.8948 59.3597 12.6726 60.996 7.93779C61.3093 7.24149 61.4834 6.47556 61.4834 5.67482C61.4834 2.5763 58.9419 0 55.8086 0Z"
            fill="url(#paint2_linear_636_588)"
          ></path>
          <path
            d="M44.2851 31.5422L44.2503 31.5074C43.9717 30.8808 43.5888 30.3237 43.1362 29.8363C41.7436 27.8171 40.3858 25.6934 40.3858 23.4304C40.3858 21.2371 41.7436 19.1134 43.1014 17.1637C43.5888 16.6763 43.9717 16.1193 44.2503 15.4926C44.2503 15.4926 44.2503 15.4578 44.2851 15.4578C44.5984 14.7615 44.7725 13.9956 44.7725 13.1948C44.7725 10.0615 42.231 7.52002 39.0977 7.52002C35.9643 7.52002 33.4229 10.0615 33.4229 13.1948C33.4229 13.9956 33.5969 14.7615 33.9103 15.4578L33.9451 15.4926C34.2236 16.1193 34.6065 16.6763 35.0591 17.1289C36.4517 19.1482 37.8095 21.2719 37.8095 23.5348C37.8095 25.7282 36.4517 27.8519 35.094 29.8015C34.6066 30.2889 34.2236 30.8459 33.9451 31.4726C33.9451 31.4726 33.9451 31.5074 33.9103 31.5074C33.5969 32.2037 33.4229 32.9697 33.4229 33.7704C33.4229 36.9037 35.9643 39.4452 39.0977 39.4452C42.231 39.4452 44.7725 36.9037 44.7725 33.7704C44.7377 33.0393 44.5636 32.2734 44.2851 31.5422Z"
            fill="url(#paint3_linear_636_588)"
          ></path>
          <path
            d="M72.5195 17.8252C69.3862 17.8252 66.8447 20.3667 66.8447 23.5C66.8447 26.6333 69.3862 29.1748 72.5195 29.1748C75.6529 29.1748 78.1944 26.6333 78.1944 23.5C78.2292 20.3667 75.6877 17.8252 72.5195 17.8252Z"
            fill="url(#paint4_linear_636_588)"
          ></path>
          <path
            d="M111.93 19.9838H99.3965V7.62451H93.7217V38.8534H99.3965V24.4053H111.93V38.8534H117.57V7.62451H111.93V19.9838Z"
            fill="white"
          ></path>
          <path
            d="M143.89 28.0956C144.865 27.0511 145.352 25.5193 145.317 23.5C145.282 21.063 144.482 19.2178 142.915 17.9645C141.348 16.7111 138.772 16.0845 135.186 16.0845C132.61 16.0845 130.521 16.4326 128.919 17.1637C127.318 17.8948 126.134 19.1134 125.403 20.8193C124.672 22.5252 124.289 24.823 124.289 27.7823C124.289 30.4978 124.672 32.726 125.403 34.4319C126.134 36.1378 127.318 37.426 128.989 38.2267C130.625 39.0274 132.819 39.4104 135.534 39.4104C136.544 39.4104 137.588 39.3408 138.737 39.2363C139.886 39.1319 140.965 38.9578 142.01 38.7489C143.054 38.54 143.994 38.2615 144.83 37.9482L144.273 34.4667C142.915 34.606 141.488 34.7452 140.025 34.8148C138.563 34.9193 137.275 34.9541 136.161 34.9541C134.664 34.9541 133.445 34.7452 132.54 34.3274C131.635 33.9097 130.974 33.1437 130.591 32.0297C130.382 31.403 130.208 30.5674 130.103 29.6274H139.051C141.314 29.6623 142.915 29.14 143.89 28.0956ZM129.999 26.2852C130.034 24.8578 130.208 23.7089 130.451 22.8734C130.765 21.8637 131.322 21.1326 132.088 20.7497C132.888 20.3667 133.968 20.1578 135.395 20.1578C137.031 20.1578 138.18 20.4015 138.842 20.8889C139.538 21.3763 139.886 22.2467 139.921 23.4652C139.921 24.2659 139.782 24.9274 139.503 25.4497C139.225 26.0067 138.563 26.2504 137.519 26.2504H129.999V26.2852Z"
            fill="white"
          ></path>
          <path
            d="M160.044 34.2578C159.174 34.2578 158.513 34.049 158.025 33.5964C157.573 33.1438 157.329 32.5171 157.329 31.6119V7.62451H151.724V32.6912C151.724 34.5016 152.246 35.9986 153.325 37.1823C154.404 38.366 156.075 38.9578 158.373 38.9578C160.532 38.9578 162.725 38.923 164.953 38.8882C167.181 38.8534 169.305 38.7142 171.359 38.5401L171.081 34.2578H160.044Z"
            fill="white"
          ></path>
          <path
            d="M194.789 19.1828C194.162 18.0688 193.222 17.268 192.003 16.8154C190.785 16.3628 189.288 16.1191 187.512 16.1191C186.433 16.1191 185.214 16.154 183.857 16.2584C182.499 16.3628 181.141 16.4673 179.818 16.6065C178.495 16.7458 177.312 16.9547 176.232 17.1636L176.72 20.9236C178.46 20.7843 180.201 20.6451 181.942 20.5754C183.683 20.471 185.11 20.4362 186.259 20.4362C187.791 20.4362 188.835 20.7147 189.392 21.2369C189.949 21.7591 190.193 22.6295 190.193 23.7784V25.2406H181.629C179.609 25.2406 178.008 25.728 176.859 26.7028C175.71 27.6777 175.118 29.0354 175.118 30.811V33.1784C175.118 34.5362 175.432 35.6851 176.023 36.5903C176.615 37.4954 177.451 38.1917 178.495 38.6791C179.54 39.1317 180.758 39.3754 182.081 39.3754C183.369 39.3754 184.553 39.1665 185.632 38.7836C186.712 38.4006 187.652 37.8784 188.487 37.2865C189.323 36.6947 190.019 36.068 190.576 35.4414C190.646 35.3717 190.68 35.3021 190.75 35.2325L191.342 38.888H195.694V23.8132C195.729 21.8288 195.415 20.2969 194.789 19.1828ZM189.288 33.2132C188.313 33.8399 187.303 34.3273 186.329 34.6754C185.319 35.0236 184.414 35.1628 183.613 35.1628C182.603 35.1628 181.837 34.9191 181.35 34.4665C180.863 34.014 180.619 33.3177 180.619 32.4125V31.194C180.619 30.3932 180.828 29.8014 181.211 29.3488C181.594 28.8962 182.255 28.6525 183.16 28.6177H190.228V32.5517C189.914 32.7606 189.601 33.0043 189.288 33.2132Z"
            fill="white"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_636_588"
              x1="-0.0382137"
              y1="23.5163"
              x2="77.9061"
              y2="23.5163"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12C781"></stop>
              <stop offset="0.5" stop-color="#63E9DA"></stop>
              <stop offset="1" stop-color="#09A9CB"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_636_588"
              x1="-0.0377393"
              y1="23.5159"
              x2="77.9066"
              y2="23.5159"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12C781"></stop>
              <stop offset="0.5" stop-color="#63E9DA"></stop>
              <stop offset="1" stop-color="#09A9CB"></stop>
            </linearGradient>
            <linearGradient
              id="paint2_linear_636_588"
              x1="-0.037306"
              y1="23.5162"
              x2="77.907"
              y2="23.5162"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12C781"></stop>
              <stop offset="0.5" stop-color="#63E9DA"></stop>
              <stop offset="1" stop-color="#09A9CB"></stop>
            </linearGradient>
            <linearGradient
              id="paint3_linear_636_588"
              x1="-0.0371253"
              y1="23.5167"
              x2="77.9072"
              y2="23.5167"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12C781"></stop>
              <stop offset="0.5" stop-color="#63E9DA"></stop>
              <stop offset="1" stop-color="#09A9CB"></stop>
            </linearGradient>
            <linearGradient
              id="paint4_linear_636_588"
              x1="-0.0374818"
              y1="23.5159"
              x2="77.9068"
              y2="23.5159"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#12C781"></stop>
              <stop offset="0.5" stop-color="#63E9DA"></stop>
              <stop offset="1" stop-color="#09A9CB"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="cursor-pointer" onClick={() => router.push("/swap")}>
          Swap
        </div>
        <div
          className="cursor-pointer"
          onClick={() => router.push("/addliquidity")}
        >
          Add Liquidity
        </div>
        <ConnectButton />
      </div>
    </nav>
  );
}