using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Net.Mail;


namespace Email
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void btn_send_Click(object sender, EventArgs e)
        {
            sendMail();
        }
        protected void sendMail()
        {
            try{

            MailMessage mail = new MailMessage(); // make the object of the MailMessage class
            SmtpClient smtp = new SmtpClient();
                try
                {
                    mail.To.Add(txt_sender.Text); // add the address of sender
                    mail.From = new MailAddress("robin3589@gmail.com");

                }
                catch (Exception e)
                {
                    ScriptManager.RegisterStartupScript(this, Page.GetType(), "Alert", "alert(' sender id is not correct');", true);
                    // sender id is not correct
                }

                mail.Subject = txt_sub.Text;
                mail.Body = txt_content.Text;
                smtp.Host = "smtp.gmail.com";
                smtp.Port = 587;
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = new System.Net.NetworkCredential("robin3589@gmail.com", "ROBin3589!");
                smtp.EnableSsl = true;
                try
                {
                    smtp.Send(mail);
                }
                catch (Exception e)
                {
                    ScriptManager.RegisterStartupScript(this, Page.GetType(), "Alert", "alert('EITHER USERNAME OR PASSWORD IS INCORRECT');", true);
                    //EITHER USERNAME OR PASSWORD IS INCORRECT
                }

            }
            
            catch(Exception e)
            {
                ScriptManager.RegisterStartupScript(this,Page.GetType(),"Alert","alert('MESSAGE NOT SENT...');",true);
                //MESSAGE NOT SENT...
            }
            //MESSAGE SENT
            ScriptManager.RegisterStartupScript(this, Page.GetType(), "Alert", "alert('MESSAGE SENT');", true);
        
}
    }
}