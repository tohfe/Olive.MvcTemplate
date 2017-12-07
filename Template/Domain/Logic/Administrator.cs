﻿namespace Domain
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Olive;
    using Olive.Entities;
    using Olive.Services;
    using Olive.Services.ImpersonationSession;
    using Olive.Web;
    using Olive.Security;
    using System.Threading.Tasks;
    using System.Security.Principal;

    /// <summary> 
    /// Provides the business logic for Administrator class.
    /// </summary>
    partial class Administrator : IImpersonator
    {
        /// <summary>
        /// Gets the roles of this user.
        /// </summary>
        public override IEnumerable<string> GetRoles() => base.GetRoles().Concat("Administrator");

        bool IImpersonator.CanImpersonate(IIdentity user) => true;

        Task IImpersonator.LogOnAs(IIdentity user) => (user as User).LogOn();
    }
}