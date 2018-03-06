<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Email.aspx.cs" Inherits="Email.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <%--<asp:TextBox ID="txt1" runat="server" Placeholder="Enter your mail id" style=" "></asp:TextBox><br/><br/>--%>

        <asp:TextBox ID="txt_sender" runat="server"  Placeholder="Sender mail id"></asp:TextBox><br/><br/>
        <asp:TextBox ID="txt_sub" runat="server"  Placeholder="subject"></asp:TextBox><br/><br/>
        <asp:TextBox ID="txt_content" runat="server"  Placeholder="Mail content"></asp:TextBox><br/><br/>

        <asp:Button runat="server" ID="btn_send" Text="Send" OnClick="btn_send_Click"/>
    </div>
    </form>
</body>
</html>
