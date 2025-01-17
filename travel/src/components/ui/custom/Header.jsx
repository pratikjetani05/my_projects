import React, { useEffect, useState } from 'react'
import { Button } from '../button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


function Header() {

  const user=JSON.parse(localStorage.getItem('user'));
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(()=>{
    console.log(user);
  },[])

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?acess_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDialog(false);
       window.location.reload();
      });
  };


  return (
    <div className='p-3 shadow-md flex justify-between items-center px-5 '>
      <img src="./logo.svg" alt="logo" />
      <div>
        {
          user?
          <div className='flex items-center gap-3'>
              <a href="/create-trip">
              <Button variant="outline" className='rounded-full'>+ Create Trip</Button>
              </a>
              
              <a href="/my-trips">
              <Button variant="outline" className='rounded-full'>My Trip</Button>
              </a>
              
              {/* <img src={user?.picture} className='h-[35px] w-[35px] rounded-full ' /> */}
              <Popover>
                <PopoverTrigger><img src={user?.picture} className='h-[35px] w-[35px] rounded-full ' /></PopoverTrigger>
                <PopoverContent><h2 className='cursor-pointer'
                onClick={()=>{
                  googleLogout();
                  localStorage.clear();
                  window.location.reload();
                }}
                >LogOut</h2></PopoverContent>
              </Popover>

          </div>
          :
          <Button onClick={()=>setOpenDialog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <img src="/logo.svg" alt="logo" />
                <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
                <p>Sign in to App with Google authentication securly</p>

                <Button
                  onClick={login}
                  className="mt-5 w-full flex gap-4 items-center"
                >
                  <FcGoogle className="w-10 h-10" />
                  Sign In with Google
                </Button>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
       
    </div>
  )
}

export default Header
