﻿namespace Domain
{
    using System.Collections.Generic;
    using System.Linq;
    using Olive;
    using Olive.Security;
    using Olive.Services.ImpersonationSession;

    /// <summary> 
    /// Provides the business logic for Administrator class.
    /// </summary>
    partial class Administrator : IImpersonator
    {
        /// <summary>Gets the roles of this user.</summary>
        public override IEnumerable<string> GetRoles() => base.GetRoles().Concat("Administrator");

        bool IImpersonator.CanImpersonate(ILoginInfo user) => true;
    }
}