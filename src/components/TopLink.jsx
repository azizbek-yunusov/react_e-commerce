import React from 'react'
import { Link } from 'react-router-dom'
import { LocationIcon, PhoneIcon } from './svg'

const TopLink = () => {
  return (
    <div className="bg-zinc-700 -z-10 w-full border-b border-b-gray-900">
      <div className="container-full lg:py-3 py-[6px] flex items-center justify-between">
        <div className="flex">
          <Link className='lg:pr-11 pr-2 text-red-600 font-bold lg:text-4xl text-xl lg:hidden block' to="/">Logo.uz</Link>

          <div className="lg:flex hidden">
            <img 
              className='align-middle'
              width={30}
              height={30}
              src="data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB4bWw6c3BhY2U9InByZXNlcnZlIgogIHdpZHRoPSI0Mi4zMzM0bW0iCiAgaGVpZ2h0PSIyOS42MzRtbSIKICB2ZXJzaW9uPSIxLjAiCiAgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIgogIHZpZXdCb3g9IjAgMCA0MjE5LjEzIDI5NTMuNDUiPgogPGRlZnM+CiAgPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KICAgPCFbQ0RBVEFbCiAgICAuZmlsMiB7ZmlsbDojMDAzOUE2O2ZpbGwtcnVsZTpub256ZXJvfQogICAgLmZpbDEge2ZpbGw6I0Q1MkIxRTtmaWxsLXJ1bGU6bm9uemVyb30KICAgIC5maWwwIHtmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvfQogICBdXT4KICA8L3N0eWxlPgogPC9kZWZzPgogIDxnIGlkPSLQodC70L7QuV94MDAyMF8xIj4KICA8bWV0YWRhdGEgaWQ9IkNvcmVsQ29ycElEXzBDb3JlbC1MYXllciIvPgogICAgPGcgaWQ9InJ1LnN2ZyI+CiAgIDxyZWN0IGNsYXNzPSJmaWwwIiB4PSItMCIgeT0iMCIgd2lkdGg9IjQyMTkuMTMiIGhlaWdodD0iMTY4Ny42OCIvPgogICAgICA8cmVjdCBjbGFzcz0iZmlsMSIgeD0iLTAiIHk9IjEyNjUuNzciIHdpZHRoPSI0MjE5LjEzIiBoZWlnaHQ9IjE2ODcuNjgiLz4KICAgICAgPHJlY3QgY2xhc3M9ImZpbDIiIHg9Ii0wIiB5PSI4NDMuODYiIHdpZHRoPSI0MjE5LjEzIiBoZWlnaHQ9IjEwNTQuNzkiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=" alt="" />
            <p className="text-white ml-2">Рус</p>
          </div>
          <div className="text-white lg:ml-8 ml-4 lg:flex hidden">
            {LocationIcon}
            {" "}
            <p className="ml-1">Узбекистан</p>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div className="lg:hidden cursor-pointer text-white">
              {PhoneIcon}
            </div>
            <p className="text-white lg:block hidden text-lg font-medium">Контакт центр:</p>
            <p className="text-white lg:block hidden text-lg font-medium ml-3">+998(94) 554 55 94</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopLink